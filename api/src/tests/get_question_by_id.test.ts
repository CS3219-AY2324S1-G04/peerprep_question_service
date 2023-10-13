/**
 * @file Unit tests for API endpoint to read questions by ID.
 * @author Irving de Boer
 */
import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {mockData} from "./mock_data";

describe('Testing API endpoints for retrieving questions by ID', () => {

    describe('Valid request, returns a question by ID', () => {
        it('Should return status code 200 and a question', async () => {
            const id = mockData[0]._id;
            jest.spyOn(QuestionService.prototype, 'findOneById')
                // @ts-ignore
                .mockReturnValueOnce(Promise.resolve(mockData[0]));
            const {statusCode} = await supertest(newApp).get(`/question-service/questions/${id}`);
            expect(statusCode).toBe(200);
        });
    });

    describe('Valid request, no questions with matching ID found', () => {
        it('Should return status code 404 and an error message', async () => {
            const id = '123456789012';
            jest.spyOn(QuestionService.prototype, 'findOneById')
                // @ts-ignore
                .mockReturnValueOnce(Promise.resolve(null));
            const {statusCode} = await supertest(newApp).get(`/question-service/questions/${id}`);
            expect(statusCode).toBe(404);
        });
    });

    describe('Error in request', () => {
       it('Should return status code 500 and an error message', async () => {
          const id = mockData[0]._id;
            jest.spyOn(QuestionService.prototype, 'findOneById')
                // @ts-ignore
                .mockImplementationOnce(() => {
                    throw new Error();
                });

            const {statusCode} = await supertest(newApp).get(`/question-service/questions/${id}`);
            expect(statusCode).toBe(500);
       });
    });
});
