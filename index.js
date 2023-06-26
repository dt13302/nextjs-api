const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");
const app = express();

app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM User", function (err, results, filds) {
    res.send(results);
  });
});

app.listen(process.env.PORT || 3000);
