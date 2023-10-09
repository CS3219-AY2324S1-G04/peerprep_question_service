import app from "../app"
import supertest from "supertest";

const newApp = app;

describe('Questions', () => {
    describe('GET /', () => {
        it('Should return error 404 message', async () => {
           const {statusCode} = await supertest(newApp).get('/');
           expect(statusCode).toBe(404);
        });
    });
});
