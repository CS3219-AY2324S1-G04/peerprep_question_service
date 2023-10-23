/**
 * @file Defines the constants within question service API.
 * @author Irving de Boer
 */
import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.EXPRESS_DOCKER_PORT;
export const MONGO_URI = process.env.MONGO_URI_LOCAL!

