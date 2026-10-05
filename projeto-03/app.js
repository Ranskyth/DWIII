import http from "http";
import app from "./public/js/rotas.js";
import { PORT } from "./config.js";

let server = http.createServer(app.rotas);

server.listen(PORT);
console.log(`server on - http://localhost:${PORT}`);
