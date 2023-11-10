/**
 * @file Defines the constants within question service API.
 * @author Irving de Boer
 */
import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.API_PORT;
export const MONGO_URI = process.env.MONGO_URI!;
export const REDIS_HOST: string = process.env.REDIS_HOST!;
export const REDIS_PORT: string = process.env.REDIS_PORT!;
