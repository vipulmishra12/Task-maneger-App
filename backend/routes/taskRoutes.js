const express = require("express")
const Task = require("../model/taskModel.js")
const { createTask, getTasks, getSingleTask, deleteTask, updateTask } = require("../controllers/taskController.js")
const router = express.Router()



//create routes

router.post("/api/task", createTask)
router.get("/api/tasks", getTasks)
router.get("/api/tasks/:id", getSingleTask)
router.delete("/api/tasks/:id", deleteTask)
router.put("/api/tasks/:id", updateTask)


module.exports = router