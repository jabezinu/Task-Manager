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


// Get all tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }
        
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// Update a task by ID
export const updateTask = async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, completed },
            { new: true }
        );

        if (!task) return res.status(404).json({ error: 'Task not found' });
        
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
