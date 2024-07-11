import Article from '../../../../server/database/models/Article';
import upload from '../../../../server/database/custom/multer'; 
import { createArticle } from '../../../../server/services/articlesAndQuestions/routes/articles/articles.controller';

jest.mock("../../../../server/database/models/Article");
jest.mock("../../../../server/database/custom/multer", () => jest.fn((req, res, callback) => callback()));

describe('createArticle', () => {
  let mockReq, mockRes;

  beforeEach(() => {
    mockReq = { body: {}, file: null };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('should create an article successfully', async () => {
    Article.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(true),
    }));
    mockReq.body = { id: '1', title: 'Test', author: 'Author', description: 'Description', email: 'email@example.com', username: 'username' };
    mockReq.file = { filename: 'test.jpg' };

    await createArticle(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Article created successfully' }));
  });

  test('should handle file upload error', async () => {
    upload.mockImplementationOnce((req, res, callback) => callback('Upload error'));

    await createArticle(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Upload error' });
  });

  test('should handle database error', async () => {
    Article.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error('Database error')),
    }));

    await createArticle(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Error creating article' }));
  });
});