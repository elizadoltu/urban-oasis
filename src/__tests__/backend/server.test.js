import request from 'supertest';
import app from '../../server/server.js';

describe('GET /', () => {
    it('should respond with status 200 and return data', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name', 'John Doe');
        expect(response.body).toHaveProperty('email', 'johndoe@example.com');
        expect(response.body).toHaveProperty('username', 'johndoe');
    });
});
