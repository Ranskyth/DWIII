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

    // API para lista de inscritos
    if (rota === "/api/inscritos") {
      const dataPath = path.join(__dirname, "..", "data", "inscritos.json");
      if (fs.existsSync(dataPath)) {
        enviarArquivos(res, "data/inscritos.json", "application/json");
      } else {
        enviarArquivos(res, JSON.stringify([]), "application/json");
      }
      return;
    }

    // POST para nova inscrição
    if (rota === "/api/inscrever" && req.method === "POST") {
      let body = "";
      req.setEncoding("utf8");
      req.on("data", chunk => {
        body += chunk;
      });
      req.on("end", () => {
        console.log("Body recebido:", body);
        try {
          const dados = JSON.parse(body);
          console.log("Dados parseados:", dados);
          
          const dataPath = path.join(__dirname, "..", "data", "inscritos.json");
          let inscritos = [];
          if (fs.existsSync(dataPath)) {
            const fileData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
            inscritos = fileData.inscritos || [];
          }
          
          inscritos.push({
            id: Date.now(),
            nome: dados.nome,
            email: dados.email,
            lote: dados.lote,
            dataInscricao: new Date().toISOString()
          });
          
          fs.writeFileSync(dataPath, JSON.stringify(inscritos, null, 2));
          
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true, mensagem: "Inscrição realizada com sucesso!" }));
        } catch (err) {
          console.error("Erro ao processar:", err);
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: false, mensagem: "Erro ao processar inscrição: " + err.message }));
        }
      });
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
