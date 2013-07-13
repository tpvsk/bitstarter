var express = require('express');

var app = express.createServer(express.logger());

var infile = "index.html";
var buffer = new Buffer(27);
var fs = require("fs");

buffer.write(fs.readFileSync("index.html", "utf-8"));

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
//  response.send("Hello world!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
