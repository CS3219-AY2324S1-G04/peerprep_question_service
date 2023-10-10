import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import {mockData} from "./mock_data";
import newApp from "../app";

describe('Testing API endpoints for retrieving questions by match params', () => {

    describe('Unsuccessful request', () => {
        it('Should return status code 500 and an error message', async () => {
            jest.spyOn(QuestionService.prototype, 'findByParams')
                // @ts-ignore
                .mockImplementationOnce(() => {
                    throw new Error();
                });
            const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                .query({complexity: 'Easy', categories: 'test'});
            expect(statusCode).toBe(500);
        });
    });

    describe('GET /question-service/question-matching/question', () => {
        describe('Successful request', () => {
            it('Should return status code 200 and a list of questions in database', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve({}));
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                    .query({complexity: 'Easy', categories: ['test1', 'test2']});
                expect(statusCode).toBe(200);
            });
        });

        describe('Request missing all parameters', () => {
            it('Should return status code 400 and an error message', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(mockData));
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                    .query({complexity: null, categories: null});
                expect(statusCode).toBe(400);

            });
        });

        describe('Request missing complexity parameter', () => {
            it('Should return status code 400 and an error message', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(mockData));
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                    .query({complexity: null, categories: ['test1', 'test2']});
                expect(statusCode).toBe(400);
            });
        });

        describe('Request missing categories parameter', () => {
           it('Should return status code 200', async () => {
               jest.spyOn(QuestionService.prototype, 'findByParams')
                   // @ts-ignore
                   .mockReturnValueOnce(Promise.resolve(mockData));
               const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                   .query({complexity: 'Easy', categories: null});
               expect(statusCode).toBe(200);
           })
        });

    });
});
