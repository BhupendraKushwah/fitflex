require('dotenv').config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const debug = require("debug")("server:server");
const http = require("http");
const port = normalizePort(process.env.PORT || "3001");

require('./configs/database.config');

const app = express();
app
    .set("port", port)
    .use(express.json({ limit: "100mb" }))
    .use(express.urlencoded({ extended: true, limit: "100mb", parameterLimit: 1000000 }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, "uploads/invoices")))
    .disable("x-powered-by")
    .use((req, res, next) => {
        if (req.get('x-amz-sns-message-type')) {
            req.headers['Content-Type'] = 'application/json';
        }
        next();
    })
    .use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*"); // Update to specific domains if needed
        res.header(
            "Access-Control-Allow-Methods",
            "GET,HEAD,OPTIONS,POST,PUT,DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, refreshToken"
        );
        next();
    })
    .get("/api", (req,res)=>{
        console.log(`API Request: ${req.method} ${req.originalUrl}`);
        
        res.status(200).json({
            message: "Welcome to gymaxis API",
            version: "1.0.0",
            documentation: "  ss  "
    })})
    .use((err, req, res, next) => {
        res.status(err.status || 500).json({
            error: {
                message: err.message || "Internal Server Error",
            },
        });
    });

/**
* Create HTTP server.
*/

var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/

server.listen(port, () => {
    console.info(`Schezy  Server is running at http://localhost:${port}`);
});
server.on("error", onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);

}


module.exports = app;
