import request from 'supertest';
import app from '../../server/server.js';

describe('Test the root path', () => {
    it('should respond with a 200 status code and "Hello World!" meesage', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe('Hello World!');
    });
});