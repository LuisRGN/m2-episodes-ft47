const { Router } = require("express");
const { getController, postController, putController, deleteController } = require("../controllers/controller.js");
const ruter = Router();

ruter.get("/", getController)
ruter.post("/", postController)
ruter.put("/", putController)
ruter.delete("/", deleteController)


module.exports = ruter; 