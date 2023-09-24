const express = require("express");
const router = express.Router();
const {
  getAllItems,
  createTask,
  getTask,
  updateTasks,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllItems).post(createTask);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTask);

module.exports = router;
