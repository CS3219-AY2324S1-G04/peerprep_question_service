/**
 * @file Handles get request endpoints.
 * @author Irving de Boer
 */
import { Request, Response } from 'express';
import { createClient } from 'redis';

import { QuestionService } from '../database/question.database';
import { IPagination, IQuestion } from '../interface/question.interface';
import { Routes } from './routes';

export class GetRoute extends Routes {
  private _categories: string[] = [];
  private _languages: Array<IQuestion> = [];
  public constructor(
    questionService: QuestionService,
    redis: ReturnType<typeof createClient>,
    languages: Array<IQuestion>,
    categories: Array<string>,
  ) {
    super(questionService, redis);
    this._categories = categories;
    this._languages = languages;
    console.log(this._languages);
    console.log(this._categories);
    this.setRoutes();
  }
  protected setRoutes() {
    this.router.route('/questions').get(this._findAll);
    this.router.route('/questions/:id').get(this._findOneById);
    this.router.route('/question-matching/question').get(this._findByParams);
    this.router.route('/categories').get(this._getCategories);
    this.router.route('/languages').get(this._getAllLanguages);
  }

  private _findAll = async (req: Request, res: Response) => {
    try {
      const limit: number = Number(req.query.limit as string);
      const offset: number = Number(req.query.offset as string);

      const complexity: string = req.query.complexity as string;
      const categories: Array<string> = req.query.categories as Array<string>;

      const language: Array<string> = req.query.languages as Array<string>;

      const page: IPagination = {
        limit: limit,
        skip: offset,
      };

      const filter: {
        complexity: string;
        categories: Array<string>;
        language: Array<string>;
      } = {
        complexity: complexity,
        categories: categories,
        language: language,
      };

      const question = await this.questionService.findAll(page, filter);
      res.status(200).send(this.getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };

  private _findOneById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const question = await this.questionService.findOneById(id);
      if (question === null) {
        res
          .status(404)
          .send(this.getErrorResponse(404, 'Question does not exist'));
      } else {
        res
          .status(200)
          .send(this.getStandardResponse('success', question, null));
      }
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };

  private _findByParams = async (req: Request, res: Response) => {
    try {
      const complexity: string = req.query.complexity as string;
      const categories: Array<string> = req.query.categories as Array<string>;

      const language: string = req.query.language as string;

      const isValidParams =
        !req.query ||
        !req.query.complexity ||
        complexity === '' ||
        !req.query.language ||
        language === '';

      if (isValidParams) {
        res
          .status(400)
          .send(this.getErrorResponse(400, 'Missing parameters in query'));
        return;
      }

      const filter = {
        complexity: complexity,
        categories: categories,
        language: language,
      };

      const questionList = await this.questionService.findByParams(filter);

      const questionListLength = questionList.length;
      const randomIndex = Math.floor(Math.random() * questionListLength);
      const question: IQuestion = questionList[randomIndex];

      if (question !== undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        question.template = undefined;
      }

      res.status(200).send(this.getStandardResponse('success', question, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };

  private _getCategories = async (req: Request, res: Response) => {
    try {
      const categories: Array<string> = this._categories;
      res
        .status(200)
        .send(this.getStandardResponse('success', categories, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };

  private _getAllLanguages = async (req: Request, res: Response) => {
    try {
      const languages: IQuestion[] = this._languages;
      res
        .status(200)
        .send(this.getStandardResponse('success', languages, null));
    } catch (e) {
      if (e instanceof Error) {
        res.status(500).send(this.getErrorResponse(500, e.message));
      }
    }
  };
}
