const express = require("express");
const app = express();
const Routes = require("./Routes/Route");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/todo/", Routes);

//database connection
const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected succesfully");
  } catch (error) {
    console.log(error);
  }
};
DBConnection();
//server porting
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
