const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

//routers here
const commentsRouter = require("./routers/commentsRouter")

const server = express()


server.use(helmet())
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())

//set router up to server and its proper route
server.use("/comments", commentsRouter)

//testing endpoint
server.get("/testing", (req,res) => {
    res.status(200).json({messgae: "Server is up and running on endpoint"})
})

module.exports = server