import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {mockData} from "./mock_data";
import {QuestionController} from "../controller/question.controller";

describe('Testing API endpoints for deleting a question by ID', () => {
    describe('DELETE /question-service/questions/:id', () => {

        describe('Successful request', () => {
            const id = mockData[0]._id;
            it('Should return status code 200 and the deleted question', async () => {

                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndDelete')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(mockData[0]));

                const {statusCode} = await supertest(newApp).delete(`/question-service/questions/${id}`);

                expect(statusCode).toBe(200);
                expect(QuestionService.prototype.findAndDelete).toHaveBeenCalled();
            });
        });

        describe('Unsuccessful request, question not found', () => {
            const id = '5f9d7a3b9d1d9e1f1c9b4c9a';
            it('Should return status code 404 and an error message', async () => {

                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndDelete')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(null));

                const {statusCode} = await supertest(newApp).delete(`/question-service/questions/${id}`);

                expect(statusCode).toBe(404);
            });
        });

        describe('Unsuccessful request, user not authorised', () => {
            const id = mockData[0]._id;
            it('Should return status code 401 and an error message', async () => {

                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(false));

                const {statusCode} = await supertest(newApp).delete(`/question-service/questions/${id}`);

                expect(statusCode).toBe(401);
            });
        });

        describe('Unsuccessful request, error occurred', () => {
            const id = mockData[0]._id;
            it('Should return status code 500 and an error message', async () => {
                jest.spyOn(QuestionController.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndDelete')
                    // @ts-ignore
                    .mockImplementationOnce(() => {
                        throw new Error();
                    });

                const {statusCode} = await supertest(newApp).delete(`/question-service/questions/${id}`);

                expect(statusCode).toBe(500);
            });
        });
    });
});
