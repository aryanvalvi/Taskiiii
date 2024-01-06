const express = require("express");
const Routes = express.Router();
const {
  GetAllTask,
  CreateTask,
  GetTask,
  DeleteTask,
  UpdateTask,
} = require("../controller/Task");
Routes.get("/", GetAllTask);
Routes.post("/Create/", CreateTask);
Routes.get("/:id", GetTask);
Routes.delete("/delete/:id", DeleteTask);
Routes.patch("/update/:id", UpdateTask);

module.exports = Routes;
