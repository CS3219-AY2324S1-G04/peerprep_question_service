import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {QuestionController} from "../controller/question.controller";

describe('Testing API endpoints for adding questions', () => {
    describe('POST /question-service/questions', () => {

        describe('Successful request', () => {
            const newQuestion = {
                title: 'Test question',
                description: 'Test description',
                categories: ['Test category'],
                complexity: 'Easy'
            }
            it('Should return status code 201 and the newly added question', async () => {
                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));
                jest.spyOn(QuestionService.prototype, 'addQuestion')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(newQuestion));
                const {statusCode} = await supertest(newApp).post('/question-service/questions')
                    .send(newQuestion);
                expect(statusCode).toBe(201);
                expect(QuestionService.prototype.addQuestion).toHaveBeenCalled();
            });
        });

        describe('Unsuccessful request, user not authorised', () => {
            const newQuestion = {
                title: 'Test question',
                description: 'Test description',
                categories: ['Test category'],
                complexity: 'Easy'
            }
            it('Should return status code 401 and an error message', async () => {
                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(false));
                const {statusCode} = await supertest(newApp).post('/question-service/questions')
                    .send(newQuestion);
                expect(statusCode).toBe(401);
            });
        });

        describe(('Unsuccessful request, error occurred'), () => {
           const newQuestion = {
                title: 'Test question',
                description: 'Test description',
                categories: ['Test category'],
                complexity: 'Easy'
           }
              it('Should return status code 500 and an error message', async () => {
                    jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                        // @ts-ignore
                        .mockReturnValueOnce(Promise.resolve(true));
                    jest.spyOn(QuestionService.prototype, 'addQuestion')
                        // @ts-ignore
                        .mockImplementation(() => {
                            throw new Error('Error');
                        });
                    const {statusCode} = await supertest(newApp).post('/question-service/questions')
                        .send(newQuestion);
                    expect(statusCode).toBe(500);
              });
        });
    });
});
