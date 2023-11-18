/**
 * @file Manages the configuration settings for REST API.
 * @author Irving de Boer
 */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import * as redis from 'redis';

import {
  MONGO_URI,
  REDIS_HOST,
  REDIS_PORT,
} from './constants/question-service-api.constants';
import { QuestionService } from './database/question.database';
import { AuthRoute } from './routes/route.auth';
import { DeleteRoute } from './routes/route.delete';
import { GetRoute } from './routes/route.get';
import { PostRoute } from './routes/route.post';
import { PutRoute } from './routes/route.put';

dotenv.config();

class App {
  public app: Application;
  public redis;

  public constructor() {
    this.app = express();
    this.redis = redis.createClient({
      url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
    });
    this._setConfig();
    this._setMongoConfig();
    this._setControllers();
  }

  private _setConfig() {
    const corsOptions = {
      origin: new RegExp('http://localhost:[0-9]+'),
      credentials: true,
    };

    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors(corsOptions));
    this.app.use(cookieParser());
  }

  private async _setControllers() {
    // Creating a new instance of Question Controller
    await this._setPrivateKey();
    const questionService = new QuestionService();
    const authRoutes = new AuthRoute(questionService, this.redis);
    const getRoutes = new GetRoute(questionService, this.redis);
    const postRoutes = new PostRoute(questionService, this.redis);
    const putRoutes = new PutRoute(questionService, this.redis);
    const deleteRoutes = new DeleteRoute(questionService, this.redis);

    // Telling express to use our Controller's routes
    this.app.use('/question-service', authRoutes.router);
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
    if (process.env.NODE_ENV !== 'test') {
      mongoose
        .connect(MONGO_URI, { ignoreUndefined: true })
        .catch((error) => console.log(error));
    }
  }

  private _setPrivateKey = async () => {
    try {
      const response = await fetch(
        `http://${process.env.USER_SERVICE_HOST}/user-service/access-token-public-key`,
      );

      if (response.status !== 200) {
        process.env.JWT_TOKEN = '';
        process.exit(1);
      } else {
        process.env.JWT_TOKEN = await response.text();
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        process.exit(1);
      }
    }
  };
}

export default new App().app;
