import fs from "fs";
import path from "path";
import url, { fileURLToPath } from "url";
import enviarArquivos from "../lib/enviar-arquivos.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = {
  rotas: (req, res) => {
    let rota = decodeURIComponent(url.parse(req.url).pathname);

    // API para trilhas
    if (rota === "/api/trilhas") {
      enviarArquivos(res, "data/trilhas.json", "application/json");
      return;
    }

    // API para programação
    if (rota === "/api/programacao") {
      enviarArquivos(res, "data/programacao.json", "application/json");
      return;
    }

    // Página inicial
    if (rota === "/") {
      enviarArquivos(res, "index.html", "text/html");
    }
    // Inscrições
    else if (rota === "/inscricoes") {
      enviarArquivos(res, "inscricoes.html", "text/html");
    }
    // Trilhas (listagem)
    else if (rota === "/trilhas") {
      enviarArquivos(res, "trilhas.html", "text/html");
    }
    // Trilha individual (ex: /trilha/engenharia-software)
    else if (rota.startsWith("/trilha/")) {
      const slug = rota.replace("/trilha/", "");
      const arquivo = `trilhas/${slug}.html`;
      if (fs.existsSync(path.join(__dirname, "..", arquivo))) {
        enviarArquivos(res, arquivo, "text/html");
      } else {
        enviarArquivos(res, "404.html", "text/html", 404);
      }
    }
    // Local e Infraestrutura
    else if (rota === "/local") {
      enviarArquivos(res, "local.html", "text/html");
    }
    // Programação
    else if (rota === "/programacao") {
      enviarArquivos(res, "programacao.html", "text/html");
    }
    // Quem Somos
    else if (rota === "/quem-somos") {
      enviarArquivos(res, "quem-somos.html", "text/html");
    }
    else {
      // Arquivos estáticos (css, js, imagens, etc.)
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