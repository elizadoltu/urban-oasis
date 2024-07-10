import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './database/db.js';
import User from './database/models/User.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.get('/', async(req, res) => {
    const user = new User({
      name: 'John Doe',
      email: 'johndoe@example.com',
      username: 'johndoe',
      password: 'password123'
    });
    const data = await user.save();
    res.send(data);
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
}

export default app;