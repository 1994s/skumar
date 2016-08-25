var express = require('express');
var app=express();
var path = require('path');
var http = require('http');

app.get("/",function(req,res){
res.send("hello");
})


var server   = http.createServer(app);
server.listen(1338, function() {
  console.log("Node server running on http://localhost:133");
});

module.exports = app;