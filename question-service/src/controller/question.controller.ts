import { Request, Response, Router } from 'express';

import {
  getErrorResponse,
  getStandardResponse,
} from '../constants/question-service-api.constants';
import { QuestionService } from '../database/question.database';
import { IQuestion } from '../interface/question.interface';

export class QuestionController {
  public router = Router();

  public constructor(private _questionService: QuestionService) {
    this.setRoutes();
  }

  public setRoutes() {
    // returns all questions
    this.router.route('/').get(this._findAll);

    // returns all questions of a specified difficulty
    this.router.route('/complexity/:complexity').get(this._findByComplexity);

    // returns a specific question by id;
    this.router.route('/id/:id').get(this._findOneById);

    // adds a question to the question repository
    this.router.route('/').post(this._addQuestion);

    // updates a question to the question repository
    this.router.route('/').put(this._updateQuestion);

    // deletes a question to
    this.router.route('/:id').delete(this._findAndDelete);
  }

  private _findAll = async (req: Request, res: Response) => {
    try {
      const question = await this._questionService.findAll();
      res.status(200).send(getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findOneById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const question = await this._questionService.findOneById(id);
      if (question === null) {
        res.send(getErrorResponse(404, 'Question does not exist'));
      } else {
        res.status(200).send(getStandardResponse('success', question, null));
      }
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findByComplexity = async (req: Request, res: Response) => {
    try {
      const complexity: string = req.params.complexity;
      const question = await this._questionService.findByComplexity(complexity);
      res.status(200).send(getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _addQuestion = async (req: Request, res: Response) => {
    try {
      const body: IQuestion = req.body;
      const question = await this._questionService.addQuestion(body);
      res.status(201).send(question);
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _updateQuestion = async (req: Request, res: Response) => {
    try {
      const body: IQuestion = req.body;
      const question = await this._questionService.findAndUpdate(body);
      if (question === null) {
        res.send(getErrorResponse(404, 'Question not found'));
      } else {
        res.status(201).send(getStandardResponse('success', question, null));
      }
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findAndDelete = async (req: Request, res: Response) => {
    try {
      const questionId: string = req.params.id;
      const question = await this._questionService.findAndDelete(questionId);
      if (question === null) {
        res.send(getErrorResponse(404, 'Question does not exist'));
      } else {
        res.status(200).send(getStandardResponse('success', question, null));
      }
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };
}
