/**
 * @file Handles get request endpoints.
 * @author Irving de Boer
 */
import { Routes } from './routes';
import { QuestionService } from '../database/question.database';
import { Request, Response } from 'express';
import { IFilter, IPagination } from '../interface/question.interface';

export class GetRoute extends Routes {
    constructor(questionService: QuestionService) {
        super(questionService);
        this._setRoutes();
    }
    protected _setRoutes() {
        this.router.route('/questions').get(this._findAll);
        this.router.route('/questions/:id').get(this._findOneById);
        this.router.route('/question-matching/question').get(this._findByParams);
        this.router.route('/categories').get(this._getCategories);
        this.router.route('/languages').get(this._getAllLanguages);
    }

    private _findAll = async (req: Request, res: Response) => {
        try {
            const limit : number = Number(req.query.limit as string);
            const offset : number = Number(req.query.offset as string);

            const complexity: string = req.query.complexity as string;
            let categories: Array<string> = req.query
              .categories as Array<string>;

            const page : IPagination = {
                limit: limit,
                skip: offset,
            }

            const filter : IFilter = {
                complexity: complexity,
                categories: categories,
            };

            const question = await this._questionService.findAll(page, filter);
            res.status(200).send(this._getStandardResponse('success', question, null));
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };

    private _findOneById = async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const question = await this._questionService.findOneById(id);
            if (question === null) {
                res.status(404).send(this._getErrorResponse(404, 'Question does not exist'));
            } else {
                res.status(200).send(this._getStandardResponse('success', question, null));
            }
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };

    private _findByParams = async (req: Request, res: Response) => {
        try {
            const complexity: string = req.query.complexity as string;
            const categories: Array<string>  = req.query
                .categories as Array<string>;

            const isValidParams = !req.query || !req.query.complexity || complexity === '';

            if (isValidParams) {
                res
                    .status(400)
                    .send(this._getErrorResponse(400, 'Missing parameters in query'));
                return;
            }

            const filter = {
                complexity: complexity,
                categories: categories,
            };

            const questionList = await this._questionService.findByParams(filter);

            const questionListLength = questionList.length;
            const randomIndex = Math.floor(Math.random() * questionListLength);
            const question = questionList[randomIndex];

            res.status(200).send(this._getStandardResponse('success', question, null));
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };

    private _getCategories = async (req: Request, res: Response)=> {
        try {
            console.log("Method called");
            const categories : Array<string> = await this._questionService.getCategories();
            res.status(200).send(this._getStandardResponse('success', categories, null));
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };

    private _getAllLanguages = async (req: Request, res: Response)=> {
        try {
            const languages : Array<any> = await this._questionService.getAllLanguages();
            res.status(200).send(this._getStandardResponse('success', languages, null));
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    }
}
