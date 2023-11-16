/**
 * @file Starts the server on defined port.
 * @author Irving de Boer
 */
import { Request, Response } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { Routes } from './routes';

export class DeleteRoute extends Routes {
  public constructor(
    questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
  ) {
    super(questionService, redis);
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.route('/questions/:id').delete(this._findAndDelete);
  }

  private _findAndDelete = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const questionId: string = req.params.id;

      const question = await this.questionService.findAndDelete(questionId);
      if (question === null) {
        res
          .status(404)
          .send(this.getErrorResponse(404, 'Question does not exist'));
      } else {
        res
          .status(200)
          .send(
            this.getStandardResponse(
              'success',
              question,
              'Question deleted successfully',
            ),
          );
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };
}
