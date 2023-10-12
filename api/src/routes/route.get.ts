import {Routes} from "./routes";
import {QuestionService} from "../database/question.database";
import {Request, Response} from 'express';
import {IFilter} from "../interface/question.interface";

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
    }

    private _findAll = async (req: Request, res: Response) => {
        try {
            const limit : number = Number(req.query.limit as string);
            const offset : number = Number(req.query.offset as string);
            const question = await this._questionService.findAll(limit, offset);
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

            if (!req.query || !req.query.complexity || complexity === '') {
                res
                    .status(400)
                    .send(this._getErrorResponse(400, 'Missing parameters in query'));
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
}
