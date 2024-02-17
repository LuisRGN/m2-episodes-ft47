const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ruter = require("./routes/ruter.js");
const userRouter = require("./routes/userRouter.js");


const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/", ruter)
server.use("/user", userRouter)

module.exports = server;