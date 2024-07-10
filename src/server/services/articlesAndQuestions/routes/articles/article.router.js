import express from 'express';
import { createArticle } from './articles.controller.js';

const router = express.Router();

router.post('/articles', createArticle);

export default router;
