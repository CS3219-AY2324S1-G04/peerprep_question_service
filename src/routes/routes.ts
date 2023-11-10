/**
 * @file Parent route class and method.
 * @author Irving de Boer
 */
import { Router } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';

export abstract class Routes {
  public router;
  public redis;

  protected constructor(
    protected questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
  ) {
    this.router = Router();
    this.redis = redis;
  }

  protected getErrorResponse(code: number, message: string) {
    return {
      status: 'error',
      code: code,
      data: null,
      message: message,
    };
  }

  protected getStandardResponse = function (
    status: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any,
    message: string | null,
  ) {
    return {
      status: status,
      data: data,
      message: message,
    };
  };

  protected async checkUserRole(sessionToken: string): Promise<number> {
    if (sessionToken === null) {
      return 401;
    }

    const response = await fetch(
      `http://${process.env.USER_SERVICE_HOST}/user-service/user/identity?session-token=${sessionToken}`,
    );

    if (response.status != 200) {
      // Return false if the response status code is not 200
      return response.status;
    }

    const data = await response.json();
    console.log(data);
    //Check if the response body contains { "userRole": "admin" or "maintainer"}
    if (
      data &&
      (data['user-role'] === 'admin' || data['user-role'] === 'maintainer')
    ) {
      return 200;
    }

    return 403;
  }

  protected abstract setRoutes(): void;
}
