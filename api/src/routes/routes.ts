/**
 * @file Parent route class and method.
 * @author Irving de Boer
 */
import {Router} from "express";
import {QuestionService} from "../database/question.database";
import { RedisClientType } from 'redis';


export abstract class Routes {
    public router;
    public redis;

    protected constructor(protected _questionService: QuestionService, redis: any) {
        this.router = Router();
        this.redis = redis;
    };

    protected abstract _setRoutes(): void;

    protected _getErrorResponse(code: number, message: string) {
        return {
            status: 'error',
            code: code,
            data: null,
            message: message,
        };
    };

    protected _getStandardResponse = function (
        status: string,
        data: any,
        message: string | null,
    ) {
        return {
            status: status,
            data: data,
            message: message,
        };
    };

    protected async _checkUserRole(sessionToken : string): Promise<boolean> {
        try {
            if (sessionToken === null) {
                return false;
            }

            const response = await fetch(`http://${process.env.USER_SERVICE_HOST}/user-service/user/identity?session-token=${sessionToken}`);

            if (response.status != 200) {
                // Return false if the response status code is not 200
                return false;
            }

            const data = await response.json();

            // Check if the response body contains { "userRole": "admin" or "maintainer" }
            return data && (data.userRole === 'admin' || data.userRole === 'maintainer');
        } catch (error) {
            // Handle any errors that occur during the fetch request
            return false;
        }
    }
}
