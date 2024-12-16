const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const Task = require("./model/taskModel.js")
const taskRoutes = require('./routes/taskRoutes.js')
const cors = require("cors")


const app = express()

//Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(taskRoutes)
//routes
app.get("/", (req, res) => {
    res.send("Homepage")
})


//get all tasks



const PORT = process.env.PORT || 8000

mongoose
    .connect(process.env.MONGO_URI)
    .then(app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((error) => console.log(error))




