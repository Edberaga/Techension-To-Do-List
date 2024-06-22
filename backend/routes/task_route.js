const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Route to Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();    // Fetch all tasks from the database
        res.json(tasks);                    // Send the tasks as a JSON response
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Route to search for tasks
router.get('/search', async (req, res) => {
    const query = req.query.query; // Get the search query from the request
    try {
        // Find tasks that match the query (case-insensitive search)
        const tasks = await Task.find({ 
            text: new RegExp(query, 'i')  
        }); 
        res.json(tasks);  // Send the matching tasks as a JSON response
    } catch (err) {
        res.status(500).send('Server Error during searching task'); 
    }
});

// Route to add a new task
router.post('/', async (req, res) => {

    // Get task details from the request body
    const { text, status } = req.body; 
    try {
        const newTask = new Task({ text, status }); // Create a new task with the provided details
        await newTask.save();                       // Save the task to the database
        res.json(newTask);                          // Send the newly created task as a JSON response
    } catch (err) {
        res.status(500).send('Server Error during Adding new task');
    }
});

// Route to update an existing task
router.put('/:id', async (req, res) => {
    
    const { status } = req.body; // Get the new status from the request body
    try {
        
        const task = await Task.findById(req.params.id); // Find the task by ID
        if (!task) { 
            // If task not found, send a 404 response
            return res.status(404).json({ msg: 'Task not found' });
        }
        task.status = status;   // Update the task status
        await task.save();      // Save the updated task to the database
        res.json(task);         // Send the updated task as a JSON response
    } catch (err) {
        res.status(500).send('Server Error during updating task');
    }
});

// Route to delete an existing task
router.delete('/:id', async (req, res) => {
    try {
         
        const task = await Task.findById(req.params.id); // Find the task by ID
        if (!task) {
            return res.status(404).json({ msg: 'Task not found' }); // If task not found, send a 404 response
        }
        await task.remove(); // Remove the task from the database
        res.json({ msg: 'Task removed' }); // Send a success message as a JSON response
    } catch (err) {
        res.status(500).send('Server Error during deleting existing task');
    }
});


module.exports = router; // Export the router to be used in server.js