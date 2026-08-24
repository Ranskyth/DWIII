const url = require("url")
const fs = require("fs")
const path = require("path")

const pagesPath = path.join(__dirname, "..")

const enviarHtml = (res, arquivo) => {
    try {
        const html = fs.readFileSync(path.join(pagesPath, arquivo), "utf8")
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
        res.end(html)
    } catch (erro) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
        res.end("Erro ao carregar a página")
    }
}

const app = {
    rotas: (req, res) => {

        let rota = url.parse(req.url).pathname

        if (rota === "/") {
            enviarHtml(res, "index.html")
        }
        else if (rota === "/gabriel") {
            enviarHtml(res, "pages/gabriel.html")
        }
        else if (rota === "/diego") {
            enviarHtml(res, "pages/diego.html")
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
            res.end("error 404")
        }
    }
}

module.exports = app