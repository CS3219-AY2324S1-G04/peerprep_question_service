/**
 * @file Handles POST request endpoints.
 * @author Irving de Boer
 */
import {Routes} from "./routes";
import {QuestionService} from "../database/question.database";
import {Request, Response} from 'express';
import {IQuestion} from "../interface/question.interface";
import { RedisClientType } from 'redis';

export class PostRoute extends Routes {
    constructor(questionService: QuestionService, redis: any) {
        super(questionService, redis);
        this._setRoutes();
    }

    protected _setRoutes() {
        this.router.route('/questions').post(this._addQuestion);
    }

    private _addQuestion = async (req: Request, res: Response) => {
        try {
            const body: IQuestion = req.body;
            const sessionToken: string = req.cookies['session-token'];

            const isAuthorized = await this._checkUserRole(sessionToken);

            if (!isAuthorized) {
                res.status(401).send(this._getErrorResponse(401, 'Unauthorised user. Only admins and maintainers may perform this role.'));
                return;
            }

            const question = await this._questionService.addQuestion(body);
            res
                .status(201)
                .send(
                    this._getStandardResponse(
                        'success',
                        question,
                        'Question successfully added',
                    ),
                );
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };
}
