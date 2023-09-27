const Tasks = require('../models/Tasks')

const getAllItems = (req, res) => {
  res.send("Get all items");
};

const createTask = async (req, res) => {
  // res.json(req.body) 
  const task = await Tasks.create(req.body);
  res.status(201).json({task});
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTasks = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllItems,
  createTask,
  getTask,
  updateTasks,
  deleteTask,
};
