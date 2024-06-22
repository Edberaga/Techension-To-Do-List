const mongoose = require('mongoose');

// MongoDB Schema for the Task collection
const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed'],
  },
});

module.exports = mongoose.model('Task', TaskSchema);