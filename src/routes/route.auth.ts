/**
 * @file Handles authentication endpoints for the REST API.
 * This class extends the Routes class.
 */
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { Routes } from './routes';

dotenv.config();

export class AuthRoute extends Routes {
  public constructor(
    questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
  ) {
    super(questionService, redis);
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.use(this._authUser);
  }

  private _authUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const accessToken = req.cookies['access-token'];

      if (accessToken === null) {
        return res
          .status(401)
          .send(this.getErrorResponse(401, 'Missing access token'));
      }

      const userStatus = this._checkUserValid(accessToken);
      console.log(userStatus.message);

      if (userStatus.status === 401) {
        return res
          .status(401)
          .send(this.getErrorResponse(401, userStatus.message));
      }

      return next();
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };

  private _checkUserValid(accessToken: string) {
    try {
      if (process.env.JWT_TOKEN === '') {
        return { status: 500, message: 'Internal Server Error' };
      }

      console.log(process.env.JWT_TOKEN);
      jwt.verify(accessToken, process.env.JWT_TOKEN!);
      return { status: 200, message: 'Valid access token' };
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'JsonWebTokenError') {
          return {
            status: 401,
            message: 'Invalid access token',
          };
        }
        if (error.name === 'TokenExpiredError') {
          return { status: 401, message: 'Access token expired' };
        }
      }
      return { status: 500, message: 'Internal Server Error' };
    }
  }
}
