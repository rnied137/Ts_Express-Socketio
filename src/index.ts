const http = require("http");
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const socket = require("socket.io");


// const userRoutes = require("./routes/user");

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors);

// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", cors(corsOptions));
app.use(express.static(path.join(path.resolve(), 'client')))


var hostname = "127.0.0.1";
var port = 4000;
var server = http.createServer(app);
var io = socket(server, { cors: { origin: "127.0.0.1" } });

app.use((req, res, next) => {
    req.io = io;
    return next();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Process terminated");
    });
});

console.log('dupcia')