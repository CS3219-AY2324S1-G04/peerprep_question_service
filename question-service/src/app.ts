import { Application } from "express";
import { QuestionController } from "./controller/question.controller";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { QuestionService } from "./database/question.database";
import { getErrorResponse } from "./constants/question-service-api.constants";
import * as dotenv from "dotenv";

dotenv.config()

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    // Creating a new instance of Question Controller
    const questionService = new QuestionService();
    const questionController = new QuestionController(questionService);

    // Telling express to use our Controller's routes
    this.app.use("/question", questionController.router);

    this.app.use((req, res, next) => {
      res.send(getErrorResponse(404, 'Invalid API Call'));
    })
  }

  private setMongoConfig() {
    const mongo_uri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}`
    +`@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/questions?authSource=admin`

    mongoose.Promise = global.Promise;
    mongoose.connect(mongo_uri).
    catch(error => console.log(error))
  }
}

export default new App().app;