/**
 * @file Unit tests for API endpoint to read all categories.
 * @author Irving de Boer
 */
import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {mockData} from "./mock_data";

describe('Testing API endpoints for retrieving categories', () => {
   describe('GET /question-service/categories', () => {

       describe('Successful request', () => {
              it('Should return status code 200 and a list of categories in database', async () => {
                jest.spyOn(QuestionService.prototype, 'getCategories')
                     // @ts-ignore
                     .mockReturnValueOnce(Promise.resolve(mockData[0].categories));
                const {statusCode} = await supertest(newApp).get('/question-service/categories');
                expect(QuestionService.prototype.getCategories).toHaveBeenCalled();
                expect(statusCode).toBe(200);
              });
       });
   });
});
