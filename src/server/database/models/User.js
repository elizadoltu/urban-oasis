import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import Counter from "../custom/counter.js";

const userSchema = new mongoose.Schema({
    userId: { type: Number, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    username: { type: String, required: true, unique: true, minlength: 2 },
    password: { type: String, required: true, unique: true }

});

userSchema.pre('save', async function(next) {
    try {
        if (!this.userId) {
            const counter = await Counter.findOneAndUpdate(
                { _id: 'userId' },
                { $inc: { sequence_value:1 } },
                { new: true, upsert: true }
            );
            this.userId = counter.sequence_value;
        }

        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
})

userSchema.path('password').validate(function(value) {
    return value && value.length >= 8;
}, 'Password must be at leat 8 characters long');

const User = mongoose.model('User', userSchema);

export default User;