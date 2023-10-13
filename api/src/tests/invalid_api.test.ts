/**
 * @file Unit tests for API endpoint for invalid calls.
 * @author Irving de Boer
 */
import app from "../app"
import supertest from "supertest";

describe('Testing invalid API endpoints', () => {
    describe('GET /', () => {
        it('Should return error 404 status code and message', async () => {
            const {statusCode} = await supertest(app).get('/');
            expect(statusCode).toBe(404);
        });
    });

    describe('GET /question-service/undefined-endpoint', () => {
        it('Should return error 404 status code and message', async () => {
            const {statusCode} = await supertest(app).get('/question-service/undefined-endpoint');
            expect(statusCode).toBe(404);
        });
    });
});
