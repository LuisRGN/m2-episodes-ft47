const express = require("express");
const { getController, postController, putController, deleteController } = require("../controllers/userController");
const postAutenticador = require("../middleware/postAutenticador");
const postCatchError = require("../middleware/postCatchError");
const userRouter = express.Router();

userRouter.get("/user", getController)
userRouter.post("/user", postAutenticador, postController, postCatchError)
userRouter.put("/", putController)
userRouter.delete("/user/:email", deleteController)

module.exports = userRouter