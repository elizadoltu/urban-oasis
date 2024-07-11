import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { pathToFileURL } from 'url';
import articleRoutes from './routes/articles/article.router.js';
import connectDB from '../../database/db.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('ARTICLES_PORT:', process.env.ARTICLES_PORT);

const app = express();
const port = process.env.ARTICLES_PORT || 4000;

connectDB();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', articleRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;
