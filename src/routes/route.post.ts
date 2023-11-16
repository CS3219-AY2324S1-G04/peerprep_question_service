/**
 * @file Handles POST request endpoints.
 * @author Irving de Boer
 */
import { Request, Response } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { IQuestion } from '../interface/question.interface';
import { Routes } from './routes';

export class PostRoute extends Routes {
  public constructor(
    questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
  ) {
    super(questionService, redis);
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.route('/questions').post(this._addQuestion);
  }

  private _addQuestion = async (req: Request, res: Response) => {
    try {
      const body: IQuestion = req.body;

      const question = await this.questionService.addQuestion(body);
      res
        .status(201)
        .send(
          this.getStandardResponse(
            'success',
            question,
            'Question successfully added',
          ),
        );
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };
}
