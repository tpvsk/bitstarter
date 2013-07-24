var express = require('express');

var app = express.createServer(express.logger());

var infile = "index2.html";
var fs = require("fs");
var buffer = new Buffer(fs.readFileSync(infile, "utf-8"), "utf-8");


app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
