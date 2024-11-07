const Task = require("../model/taskModel.js")

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getSingleTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).json(`task not found with id: ${id}`)
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task) {
            return res.status(404).json(`task not found with id: ${id}`)
        }
        res.status(200).send("Task Deleted")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//Update Task

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).json(`task not found with id: ${id}`)
        }
        return res.status(200).json(task)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })

    }
}

module.exports = {
    createTask,
    getTasks,
    getSingleTask,
    deleteTask,
    updateTask
}