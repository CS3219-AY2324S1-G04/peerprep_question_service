/**
 * @file Defines the API endpoints for the question service.
 * @author Irving de Boer
 */
import { Request, Response, Router } from 'express';

import {
  getErrorResponse,
  getStandardResponse,
} from '../constants/question-service-api.constants';
import { QuestionService } from '../database/question.database';
import { IFilter, IQuestion } from '../interface/question.interface';
import * as dotenv from 'dotenv';

dotenv.config();

export class QuestionController {
  public router = Router();

  public constructor(private _questionService: QuestionService) {
    this.setRoutes();
  }

  /**
   * Sets the API routes for question service API.
   */
  public setRoutes() {
    // returns all questions
    this.router.route('/questions').get(this._findAll);

    // returns all questions of a specified difficulty
    this.router.route('/questions/matching/').get(this._findByParams);

    // returns a specific question by id;
    this.router.route('/questions/:id').get(this._findOneById);

    // updates a question to the question repository
    this.router.route('/questions/:id').put(this._updateQuestion);

    // adds a question to the question repository
    this.router.route('/questions').post(this._addQuestion);

    // deletes a question to
    this.router.route('/questions/:id').delete(this._findAndDelete);
  }

  private _findAll = async (req: Request, res: Response) => {
    try {
      const question = await this._questionService.findAll();
      res.status(200).send(getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findOneById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const question = await this._questionService.findOneById(id);
      if (question === null) {
        res.status(404).send(getErrorResponse(404, 'Question does not exist'));
      } else {
        res.status(200).send(getStandardResponse('success', question, null));
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findByParams = async (req: Request, res: Response) => {
    try {
      const complexity: string | null = req.query.complexity as string;
      const categories: Array<string> | null = req.query
        .categories as Array<string>;

      if (complexity === null) {
        res
          .status(400)
          .send(getErrorResponse(400, 'Missing complexity parameter'));
        return;
      }

      const filter: IFilter = {
        complexity: complexity,
        categories: categories,
      };

      const questionList = await this._questionService.findByParams(filter);

      const questionListLength = questionList.length;
      const randomIndex = Math.floor(Math.random() * questionListLength);
      const question = questionList[randomIndex];

      res.status(200).send(getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(getErrorResponse(500, e.message));
      }
    }
  };

  private _addQuestion = async (req: Request, res: Response) => {
    try {
      const body: IQuestion = req.body;
      const sessionToken: string = req.cookies['session_token'];
      const isAuthorized = await this._checkUserRole(sessionToken);

      if (!isAuthorized) {
        res.status(401).send(getErrorResponse(401, 'Unauthorised user. Only admins may perform this role.'));
        return;
      }

      const question = await this._questionService.addQuestion(body);
      res
        .status(201)
        .send(
          getStandardResponse(
            'success',
            question,
            'Question successfully added',
          ),
        );
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _updateQuestion = async (req: Request, res: Response) => {
    try {
      const questionId: string = req.params.id;
      const body: IQuestion = req.body;

      const sessionToken: string = req.cookies['session_token'];

      const isAuthorized = await this._checkUserRole(sessionToken);

      if (!isAuthorized) {
        res.status(401).send(getErrorResponse(401, 'Unauthorised user Only admins may perform this role.'));
        return;
      }

      const question = await this._questionService.findAndUpdate(
        questionId,
        body,
      );
      if (question === null) {
        res.status(404).send(getErrorResponse(404, 'Question not found'));
      } else {
        res
          .status(201)
          .send(
            getStandardResponse(
              'success',
              question,
              'Question updated successfully',
            ),
          );
      }
    } catch (e) {
      if (e instanceof Error) {
        res.send(getErrorResponse(500, e.message));
      }
    }
  };

  private _findAndDelete = async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const questionId: string = req.params.id;
      const sessionToken: string = req.cookies['session_token'];

      const isAuthorized = await this._checkUserRole(sessionToken);

      if (!isAuthorized) {
        res.status(401).send(getErrorResponse(401, 'Unauthorised. Only admins may perform this role.'));
        return;
      }

      const question = await this._questionService.findAndDelete(questionId);
      if (question === null) {
        res.status(404).send(getErrorResponse(404, 'Question does not exist'));
      } else {
        res
          .status(200)
          .send(
            getStandardResponse(
              'success',
              question,
              'Question deleted successfully',
            ),
          );
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(getErrorResponse(500, e.message));
      }
    }
  };

  private async _checkUserRole(sessionToken : string): Promise<boolean> {
    try {
      console.log("Method called");
      if (sessionToken === null) {
        return false;
      }

      const response = await fetch(`http://${process.env.USER_SERVICE_HOST}/user_service/user/identity?session_token=${sessionToken}`);

      if (response.status != 200) {
        // Return false if the response status code is not 200
        return false;
      }

      const data = await response.json();
      // Check if the response body contains { "userRole": "user" }
      return data && data.userRole === 'user';
    } catch (error) {
      // Handle any errors that occur during the fetch request
      console.error('An error occurred:', error);
      return false;
    }
  }
}
