const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostController = require("./controllers/PostController");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

routes.post("/posts", upload.single("image"), PostController.store);

module.exports = routes;
