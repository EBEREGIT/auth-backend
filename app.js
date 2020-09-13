const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// require database connection 
const dbConnect = require("./db/dbConnect");

// execute database connection 
dbConnect();

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

module.exports = app;
