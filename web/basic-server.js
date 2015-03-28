var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");
var stat = require("node-static");

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize();

var port = 3000;
var ip = "127.0.0.1";
var server = http.createServer(handler.requestHandler);

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
}


// var staticServer = new stat.Server();

// var serverStatic = http.createServer(function(request, response) {
// 	staticServer.serve(request,response);
// })

