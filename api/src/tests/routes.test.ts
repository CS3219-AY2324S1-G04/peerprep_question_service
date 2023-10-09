import request from "supertest"

const baseUrl = 'https://jsonplaceholder.typicode.com/';

describe('Todos endpoint', () => {
    it('should return a 200 status code', async () => {
        const response = await request(baseUrl)
            .get('todos/1');

        expect(response.statusCode).toBe(200);
    });
});
