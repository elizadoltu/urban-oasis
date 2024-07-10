import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import User from "../../../server/database/models/User";
import connectDB from "../../../server/database/db";
import polyfills from "../../../../polyfills"

beforeAll(async () => {
    await connectDB();
});

afterEach(async () => {
    await mongoose.connection.dropDatabase();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Model Tests', () => {
    it('should create a new user', async () => {
        const userData = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            username: 'johndoe',
            password: 'password123'
        };
        const newUser = await User.create(userData);
        expect(newUser.name).toBe('John Doe');
        expect(newUser.email).toBe('johndoe@example.com');
        expect(newUser.username).toBe('johndoe');

        const isPasswordValid = await bcrypt.compare('password123', newUser.password);
        expect(isPasswordValid).toBeTruthy();
    });
});