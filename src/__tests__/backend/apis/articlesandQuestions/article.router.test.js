import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import app from '../../../../server/services/articlesAndQuestions/server';
import Article from '../../../../server/database/models/Article';

dotenv.config();

describe('Article Routes', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await Article.deleteMany({});
    });

    it('should create a new article', async () => {
        const testImagePath = path.join(__dirname, '..', '..', 'test_image.jpg');
        fs.writeFileSync(testImagePath, 'Test image content'); 

        const response = await request(app)
            .post('/api/articles')
            .field('id', '1')
            .field('title', 'Test Title')
            .field('author', 'Test Author')
            .field('description', 'Test Description')
            .field('email', 'test@example.com')
            .field('username', 'testuser')
            .attach('photo', testImagePath);

        fs.unlinkSync(testImagePath); 

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Article created successfully');
        expect(response.body.article).toHaveProperty('title', 'Test Title');
    });
});
