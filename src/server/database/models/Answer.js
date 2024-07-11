import mongoose from "mongoose";
import Counter from "../custom/counter.js";

const answerSchema = new mongoose.Schema({
    answerId: { type: Number, index: true },
    question: { type: String, required: true },
    date: { type: Date, default: Date.now },
    username: { type: String, required: true },
    answer: { type: String, required: true },
});

answerSchema.pre('save', async function(next) {
    try {
        if (!this.answerId) {
            const counter = await Counter.findOneAndUpdate(
                { _id: 'answerId' },
                { $inc: { sequence_value: 1 } },
                { new: true, upsert: true }
            );
            this.answerId = counter.sequence_value;
        }
        next();
    } catch (error) {
        next(error);
    }
})

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;