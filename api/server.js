const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("../recipe/recipe-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipe", recipeRouter);

module.exports = server;
