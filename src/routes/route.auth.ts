import { NextFunction, Request, Response } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { Routes } from './routes';

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
    const accessToken = req.cookies['access-token'];

    const status = await this._checkUserValid(accessToken);

    if (status === 401 || status === 500) {
      return res
        .status(407)
        .send(this.getErrorResponse(407, 'Missing or invalid access token'));
    }

    return next();
  };

  private _checkUserValid = async (accessToken: string) => {
    if (accessToken === null) {
      return 401;
    }

    const response = await fetch(
      `http://${process.env.USER_SERVICE_HOST}/user-service/user/profile?access-token=${accessToken}`,
    );

    if (response.status !== 200) {
      // Return false if the response status code is not 200
      return response.status;
    }

    const data = await response.json();
    console.log(data);
    //Check if the response body contains { "userRole": "admin" or "maintainer"}
    return 200;
  };
}
