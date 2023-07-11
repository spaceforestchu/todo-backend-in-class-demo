const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const todoController = require("./controllers/todoController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/todo", todoController);

module.exports = app;
