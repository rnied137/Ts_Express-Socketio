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

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer(app);
const io = socket(server);

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