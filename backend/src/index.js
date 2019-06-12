const express = require("express");
const mongoose = require("mongoose");
const { user, pass } = require("./config/db-credentials.json");

const app = express();
mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0-1wjgy.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.use(require("./routes"));

app.listen(3000);
