const { Router } = require("express");
const { getController, postController, putController, deleteController } = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", getController)
userRouter.post("/", postController)
userRouter.put("/", putController)
userRouter.delete("/", deleteController)

module.exports = userRouter