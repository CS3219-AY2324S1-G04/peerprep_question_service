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

  protected abstract setRoutes(): void;
}
