const http = require("http");
const app = require("./src/rotas.js");
const { PORT } = require("./config.js");
let server = http.createServer(app.rotas);

server.listen(PORT);
console.log(`server on - http://localhost:${PORT}`);
