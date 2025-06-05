import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        
        const task = new Task({ title, description });
        await task.save();

        res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
