const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const { user, pass } = require("./config/db-credentials.json");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0-1wjgy.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.use(cors());
app.use(require("./routes"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

server.listen(3333);
