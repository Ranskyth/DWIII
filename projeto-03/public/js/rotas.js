import fs from "fs";
import path from "path";
import url, { fileURLToPath } from "url";
import enviarArquivos from "../lib/enviar-arquivos.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = {
  rotas: (req, res) => {
    let rota = decodeURIComponent(url.parse(req.url).pathname);

    if (rota === "/") {
      enviarArquivos(res, "index.html", "text/html");
    } else if (rota === "/campus") {
      enviarArquivos(res, "campus.html", "text/html");
    } else if (rota === "/cursos") {
      enviarArquivos(res, "cursos.html", "text/html");
    } else if (rota === "/curso/ads") {
      enviarArquivos(res, "curso/ads.html", "text/html");
    } else if (rota === "/curso/dsm") {
      enviarArquivos(res, "curso/dsm.html", "text/html");
    } else if (rota === "/curso/ge") {
      enviarArquivos(res, "curso/ge.html", "text/html");
    } else if (rota === "/curso/log") {
      enviarArquivos(res, "curso/log.html", "text/html");
    } else if (rota === "/vestibular") {
      enviarArquivos(res, "vestibular.html", "text/html");
    } else if (rota === "/eventos") {
      enviarArquivos(res, "eventos.html", "text/html");
    } else if (rota === "/infraestrutura") {
      enviarArquivos(res, "infraestrutura.html", "text/html");
    } else if (rota === "/quem-somos") {
      enviarArquivos(res, "quem-somos.html", "text/html");
    } else if (rota === "/tecnologia") {
      enviarArquivos(res, "tecnologia.html", "text/html");
    } else {
      let publicDir = path.join(__dirname, "..");
      let arquivo = path.normalize(path.join(publicDir, rota));

      if (
        arquivo.startsWith(publicDir) &&
        fs.existsSync(arquivo) &&
        fs.statSync(arquivo).isFile()
      ) {
        enviarArquivos(res, path.relative(publicDir, arquivo));
      } else {
        enviarArquivos(res, "404.html", "text/html", 404);
      }
    }
  },
};

export default app;
