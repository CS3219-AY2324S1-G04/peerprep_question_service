/**
 * @file Manages the configuration settings for REST API.
 * @author Irving de Boer
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { Application } from 'express';
import express from 'express';
import mongoose from 'mongoose';

import { getErrorResponse } from './constants/question-service-api.constants';
import { QuestionController } from './controller/question.controller';
import { QuestionService } from './database/question.database';

dotenv.config();

class App {
  public app: Application;

  public constructor() {
    this.app = express();
    this._setConfig();
    this._setMongoConfig();
    this._setControllers();
  }

  private _setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private _setControllers() {
    // Creating a new instance of Question Controller
    const questionService = new QuestionService();
    const questionController = new QuestionController(questionService);

    // Telling express to use our Controller's routes
    this.app.use('/question-service', questionController.router);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((req, res, next) => {
      res.send(getErrorResponse(404, 'Invalid API Call'));
    });
  }

  private _setMongoConfig() {
    const MONGO_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/questions?authSource=admin`;

    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URI).catch((error) => console.log(error));
  }
}

export default new App().app;
