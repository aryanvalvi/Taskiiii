const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  message: String,
  completed: Boolean,
});

const Task = mongoose.model("PracticeModal", TaskSchema);
module.exports = Task;
