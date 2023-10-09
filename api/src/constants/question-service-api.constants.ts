/**
 * @file Defines the constants within question service API.
 * @author Irving de Boer
 */
import * as dotenv from 'dotenv';

import { IQuestion } from '../interface/question.interface';

dotenv.config();

export const PORT = process.env.EXPRESS_DOCKER_PORT;

/**
 * Represents the standard API response.
 * @param status - The status of the response.
 * @param data - The data to be returned in response body.
 * @param message - The message returned from the response.
 * @returns - JSON object representing response body.
 */
export const getStandardResponse = function (
  status: string,
  data: IQuestion | IQuestion[] |Array<String> | null,
  message: string | null,
) {
  return {
    status: status,
    data: data,
    message: message,
  };
};

/**
 * Represents the standard API response.
 * @param code - The HTTP error code of the response.
 * @param message - The message returned from the response.
 * @returns - JSON object representing response body.
 */
export const getErrorResponse = function (code: number, message: string) {
  return {
    status: 'error',
    code: code,
    data: null,
    message: message,
  };
};
