const express = require("express")
const server = express()

server.get("/", function (req, res) {
    return res.send("Hi!. My name is Hode")
})

server.listen(5000, function () {
    console.log("Server is Running")
})