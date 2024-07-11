import mongoose from "mongoose";
import Counter from "../custom/counter.js";

const questionSchema = new mongoose.Schema({
    questionId: { type: Number, index: true },
    title: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    numberOfAnswers: { type: Number, required: true }
});

questionSchema.pre('save', async function(next) {
    try {
        if (!this.questionId) {
            const counter = await Counter.findOneAndUpdate(
                { _id: 'questionId' },
                { $inc: { sequence_value: 1 } },
                { new: true, upsert: true }
            );
            this.questionId = counter.sequence_value;
        }
        next();
    } catch (error) {
        next(error);
    }
})

const Question = mongoose.model('Question', questionSchema);

export default Question;