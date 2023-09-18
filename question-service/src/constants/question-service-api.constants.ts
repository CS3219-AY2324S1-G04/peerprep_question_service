import * as dotenv from "dotenv";
import {IQuestion} from "../interface/question.interface";

dotenv.config();

export const PORT = process.env.EXPRESS_DOCKER_PORT;

export const getStandardResponse = function (status: string, data: IQuestion | IQuestion[] | null,
                                             message: string | null) {
    return {
        status: status,
        data: data,
        message: message
    }
}

export const getErrorResponse = function (code: number, message: string) {
    return {
        status: "error",
        code: code,
        data: null,
        message: message
    }
}