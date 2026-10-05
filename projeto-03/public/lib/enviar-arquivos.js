import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
};

const enviarArquivos = (res, arquivo, fileType, status = 200) => {
  try {
    const caminho = path.join(__dirname, "..", arquivo);
    const _arquivo = fs.readFileSync(caminho);
    const tipo =
      fileType ||
      contentTypes[path.extname(caminho).toLowerCase()] ||
      "application/octet-stream";
    res.writeHead(status, { "Content-Type": tipo });
    res.end(_arquivo);
  } catch (erro) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Erro 404 - Arquivo não encontrado");
  }
};

enviarArquivos.contentTypes = contentTypes;

export default enviarArquivos;
