import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './database/db.js';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());


if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
}

export default app;