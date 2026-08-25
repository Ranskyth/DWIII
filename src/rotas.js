const url = require("url")
const enviarArquivos = require("../lib/enviar-arquivos")


const app = {

    rotas: (req, res) => {
        
        let rota = url.parse(req.url).pathname

        if (rota === "/") {
            enviarArquivos(res, "index.html", "text/html")
        }
        else if (rota === "/gabriel") {
            enviarArquivos(res, "pages/gabriel.html", "text/html")
        }
        else if (rota === "/diego") {
            enviarArquivos(res, "pages/diego.html", "text/html")
        } 
        else if (rota === "/diego/cv") {
            enviarArquivos(res, "pages/documentos/meu-pdf.pdf", "application/pdf")
        }
        else if(rota === "/gabriel/cv"){
            enviarArquivos(res, "pages/documentos/GabrielLima.pdf", "application/pdf")
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("error 404")
        }
    }
}

module.exports = app