/**
 * @file Handles PUT request endpoints.
 * @author Irving de Boer
 */
import { Request, Response } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { IQuestion } from '../interface/question.interface';
import { Routes } from './routes';

export class PutRoute extends Routes {
  public constructor(
    questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
  ) {
    super(questionService, redis);
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.route('/questions/:id').put(this._updateQuestion);
  }

  private _updateQuestion = async (req: Request, res: Response) => {
    try {
      const questionId: string = req.params.id;
      const body: IQuestion = req.body;

      const sessionToken: string = req.cookies['session-token'];

      const userStatus = await this.checkUserRole(sessionToken);

      if (userStatus === 401) {
        return res
          .status(407)
          .send(this.getErrorResponse(407, 'Invalid session token'));
      }

      if (userStatus === 403) {
        return res
          .status(403)
          .send(
            this.getErrorResponse(
              403,
              'Unauthorised. Only users with role type of admin or maintainer may perform this role.',
            ),
          );
      }

      const question = await this.questionService.findAndUpdate(
        questionId,
        body,
      );
      if (question === null) {
        res.status(404).send(this.getErrorResponse(404, 'Question not found'));
      } else {
        res
          .status(201)
          .send(
            this.getStandardResponse(
              'success',
              question,
              'Question updated successfully',
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
