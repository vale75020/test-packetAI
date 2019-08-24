const express = require('express');
const mongoose = require("mongoose");

var app = express();

const Port = 1234

mongoose.connect("mongodb://localhost:27017/tic-tac-toe-db", {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connecté a MongoDB !");
});


app.listen(Port, () => {
    console.log(`listen on port: ${Port}`);
});