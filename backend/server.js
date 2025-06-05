import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tasksRoute from './routes/tasksRoute.js';

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.use(express.json());

// Use tasks route
app.use('/api/tasks', tasksRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});