import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import articleRoutes from './routes/articles/article.router.js';

dotenv.config();
const app = express();
const port = process.env.ARTICLES_PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', articleRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;
