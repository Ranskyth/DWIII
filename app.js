const http = require("http")
const fs = require("fs")
const app = require("./src/rotas.js")


let server = http.createServer(app.rotas)

server.listen(3333)
console.log("server on")
