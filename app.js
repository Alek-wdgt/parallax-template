const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public/')))

app.listen(8874, function () {
  console.log("View app on http://localhost:8874/static/");
});