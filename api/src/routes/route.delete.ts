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

            const isAuthorized = await this._checkUserRole(sessionToken);

            if (!isAuthorized) {
                res.status(401).send(this._getErrorResponse(401, 'Unauthorised. Only users with role type of admin or maintainer may perform this role.'));
                return;
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
