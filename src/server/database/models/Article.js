import mongoose from "mongoose";
import Counter from "../custom/counter.js";

const articleSchema = new mongoose.Schema({
    articleId: { type: Number,  index: true },
    title: { type: String, required: true },
    photo: { type: String },
    author: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true }
});

articleSchema.pre('save', async function(next) {
    try {
        if (!this.articleId) {
            const counter = await Counter.findOneAndUpdate(
                { _id: 'articleId' },
                { $inc: { sequence_value: 1 } },
                { new: true, upsert: true}
            );
            this.articleId = counter.sequence_value;
        }
        next();
    } catch (error) {
        next(error);
    }
})

const Article = mongoose.model('Article', articleSchema)

export default Article;