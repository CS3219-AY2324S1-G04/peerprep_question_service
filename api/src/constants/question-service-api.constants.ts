/**
 * @file Defines the constants within question service API.
 * @author Irving de Boer
 */
import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.EXPRESS_DOCKER_PORT;
export const MONGO_URI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_DOCKER_PORT}/questions?authSource=admin`;

