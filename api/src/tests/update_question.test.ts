import supertest from "supertest";
import {QuestionService} from "../database/question.database";
import newApp from "../app";
import {mockData} from "./mock_data";
import {PutRoute} from "../routes/route.put";

describe('Testing API endpoints for updating a question by ID', () => {
    describe('PUT /question-service/questions/:id', () => {

        describe('Successful request', () => {
            const id = mockData[0]._id;
            const updatedData = {
                title: mockData[0].title,
                description: mockData[0].description,
                categories: mockData[0].categories,
                complexity: 'Medium'
            }
            it('Should return status code 200 and the updated question', async () => {

                jest.spyOn(PutRoute.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndUpdate')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(updatedData));

                const {statusCode} = await supertest(newApp).put(`/question-service/questions/${id}`)
                    .send(updatedData);

                expect(statusCode).toBe(201);
                expect(QuestionService.prototype.findAndUpdate).toHaveBeenCalled();
            });
        });

        describe('Unsuccessful request, question not found', () => {
            const id = '5f9d7a3b9d1d9e1f1c9b4c9a';
            const updatedData = {
                title: mockData[0].title,
                description: mockData[0].description,
                categories: mockData[0].categories,
                complexity: 'Medium'
            }
            it('Should return status code 404 and an error message', async () => {

                jest.spyOn(PutRoute.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndUpdate')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(null));

                const {statusCode} = await supertest(newApp).put(`/question-service/questions/${id}`)
                    .send(updatedData);

                expect(statusCode).toBe(404);
            });
        });

        describe('Unsuccessful request, user not authorised', () => {
            const id = mockData[0]._id;
            const updatedData = {
                title: mockData[0].title,
                description: mockData[0].description,
                categories: mockData[0].categories,
                complexity: 'Medium'
            }
            it('Should return status code 401 and an error message', async () => {

                jest.spyOn(PutRoute.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(false));

                const {statusCode} = await supertest(newApp).put(`/question-service/questions/${id}`)
                    .send(updatedData);

                expect(statusCode).toBe(401);
            });
        });

        describe('Unsuccessful request, error occurred', () => {
            const id = mockData[0]._id;
            const updatedData = {
                title: mockData[0].title,
                description: mockData[0].description,
                categories: mockData[0].categories,
                complexity: 'Medium'
            }
            it('Should return status code 500 and an error message', async () => {
                jest.spyOn(PutRoute.prototype as any, '_checkUserRole')
                    // @ts-ignore
                    .mockReturnValueOnce(Promise.resolve(true));

                jest.spyOn(QuestionService.prototype, 'findAndUpdate')
                    // @ts-ignore
                    .mockImplementationOnce(() => {
                        throw new Error();
                    });

                const {statusCode} = await supertest(newApp).put(`/question-service/questions/${id}`)
                    .send(updatedData);

                expect(statusCode).toBe(500);
            });
        });
    });
});
