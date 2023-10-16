/**
 * @file Unit tests for API endpoint to read all questions.
 * @author Irving de Boer
 */
import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {mockData} from "./mock_data";

describe('Testing API endpoints for retrieving all questions', () => {

    describe('GET /question-service/questions', () => {
        describe('Successful request', () => {
            describe('Request with no filter', () => {
                it('Should return status code 200 and a list of questions in database', async () => {
                    jest.spyOn(QuestionService.prototype, 'findAll')
                        // @ts-ignore
                        .mockReturnValueOnce(Promise.resolve(mockData));
                    const {statusCode} = await supertest(newApp).get('/question-service/questions');
                    expect(QuestionService.prototype.findAll).toHaveBeenCalled();
                    expect(statusCode).toBe(200);
                });
            });

            describe('Request with filter', () => {
                it('Should return status code 200 and a list of questions in database', async () => {
                    jest.spyOn(QuestionService.prototype, 'findAll')
                        // @ts-ignore
                        .mockReturnValueOnce(Promise.resolve(mockData[0]));
                    const {statusCode} = await supertest(newApp)
                        .get('/question-service/questions?complexity=Easy&categories[]=Algorithms&categories[]=Strings');
                    expect(QuestionService.prototype.findAll).toHaveBeenCalled();
                    expect(statusCode).toBe(200);
                });
            });
        });


        describe('Unsuccessful request', () => {
           it('Should return status code 500 and an error message', async () => {
               jest.spyOn(QuestionService.prototype, 'findAll')
                   // @ts-ignore
                   .mockImplementation(() => {
                          throw new Error('Error');
                   });
               const {statusCode} = await supertest(newApp).get('/question-service/questions');
               expect(statusCode).toBe(500);
               expect(QuestionService.prototype.findAll).toHaveBeenCalled();
           });
        });
    });

});
