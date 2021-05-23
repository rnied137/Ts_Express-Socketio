var http = require("http");
var express = require("express");
var app = express();
// const bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
var socket = require("socket.io");
// const userRoutes = require("./routes/user");
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors);
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", cors(corsOptions));
app.use(express.static(path.join(path.resolve(), "client")));
var hostname = "127.0.0.1";
var port = 4000;
var server = http.createServer(app);
var io = socket(server, { cors: { oriign: "127.0.0.1" } });
server.listen(port, hostname, function () {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
process.argv.forEach(function (val, index) {
  console.log(index + ": " + val);
});
process.on("SIGTERM", function () {
  server.close(function () {
    console.log("Process terminated");
  });
});
console.log("dupcia");
