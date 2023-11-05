/**
 * @file Starts the server on defined port.
 * @author Irving de Boer
 */
import {Routes} from "./routes";
import {QuestionService} from "../database/question.database";
import {Request, Response} from 'express';

export class DeleteRoute extends Routes {
    constructor(questionService: QuestionService, redis: any) {
        super(questionService, redis);
        this._setRoutes();
    }

    protected _setRoutes() {
        this.router.route('/questions/:id').delete(this._findAndDelete);
    }

    private _findAndDelete = async (
        req: Request<{ id: string }>,
        res: Response,
    ) => {
        try {
            const questionId: string = req.params.id;
            const sessionToken: string = req.cookies['session-token'];

            const userStatus = await this._checkUserRole(sessionToken);

            if (userStatus === 401) {
                return res.status(407).send(this._getErrorResponse(407, 'Invalid session token'));
            }

            if (userStatus === 403) {
                return res.status(403).send(this._getErrorResponse(403, 'Unauthorised. Only users with role type of admin or maintainer may perform this role.'));
            }

            const question = await this._questionService.findAndDelete(questionId);
            if (question === null) {
                res.status(404).send(this._getErrorResponse(404, 'Question does not exist'));
            } else {
                res
                    .status(200)
                    .send(
                        this._getStandardResponse(
                            'success',
                            question,
                            'Question deleted successfully',
                        ),
                    );
            }
        } catch (e) {
            if (e instanceof Error) {
                res.status(500).send(this._getErrorResponse(500, e.message));
            }
        }
    };

}
