import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import {mockData} from "./mock_data";
import newApp from "../app";

describe('Testing API endpoints for retrieving questions by match params', () => {
    describe('GET /question-service/question-matching/question', () => {
        describe('Successful request', () => {
            it('Should return status code 200 and a list of questions in database', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(mockData));
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question');
                expect(statusCode).toBe(200);
            });
        });

        describe('Request missing parameters', () => {
            it('Should return status code 400 and an error message', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(mockData));
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question')
                    .query({complexity: null, categories: null});
                expect(statusCode).toBe(400);

            });
        });

        describe('Unsuccessful request', () => {
            it('Should return status code 500 and an error message', async () => {
                jest.spyOn(QuestionService.prototype, 'findByParams')
                    // @ts-ignore
                    .mockImplementation(() => {
                        throw new Error('Error');
                    });
                const {statusCode} = await supertest(newApp).get('/question-service/question-matching/question');
                expect(statusCode).toBe(500);
            });
        });
    });
});
