/**
 * @file Manages the configuration settings for REST API.
 * @author Irving de Boer
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express, {Application} from 'express';
import mongoose from 'mongoose';

import {QuestionService} from './database/question.database';

import cookieParser from 'cookie-parser';
import {GetRoute} from "./routes/route.get";
import {PostRoute} from "./routes/route.post";
import {PutRoute} from "./routes/route.put";
import {DeleteRoute} from "./routes/route.delete";

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
    this.app.use(cookieParser());
  }

  private _setControllers() {
    // Creating a new instance of Question Controller
    const questionService = new QuestionService();
    const getRoutes = new GetRoute(questionService);
    const postRoutes = new PostRoute(questionService);
    const putRoutes = new PutRoute(questionService);
    const deleteRoutes = new DeleteRoute(questionService);

    // Telling express to use our Controller's routes
    this.app.use('/question-service', getRoutes.router);
    this.app.use('/question-service', postRoutes.router);
    this.app.use('/question-service', putRoutes.router);
    this.app.use('/question-service', deleteRoutes.router);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((req, res, next) => {
      res.status(404).send({
        status: 404,
        data: null,
        message: 'API endpoint not valid',
    });
    });
  }

  private _setMongoConfig() {
    const MONGO_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/questions?authSource=admin`;

    if (process.env.NODE_ENV !== 'test') {
    mongoose
      .connect(MONGO_URI, { ignoreUndefined: true })
      .catch((error) => console.log(error));
    }
  }
}

export default new App().app;
