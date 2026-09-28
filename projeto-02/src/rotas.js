const url = require("url")
const enviarArquivos = require("../lib/enviar-arquivos")


const app = {

    rotas: (req, res) => {
        
        let rota = url.parse(req.url).pathname

        if (rota === "/") {
            enviarArquivos(res, "index.html", "text/html")
        }
        else if (rota === "/vestibular") {
            enviarArquivos(res, "pages/vestibular.html", "text/html")
        }
        else if (rota === "/cursos") {
            enviarArquivos(res, "pages/cursos.html", "text/html")
        }
        else if (rota === "/cursos/ads") {
            enviarArquivos(res, "pages/curso-ads.html", "text/html")
        }
        else if (rota === "/cursos/dsm") {
            enviarArquivos(res, "pages/curso-dsm.html", "text/html")
        }
        else if (rota === "/cursos/gestao-empresarial") {
            enviarArquivos(res, "pages/curso-gestao.html", "text/html")
        }
        else if (rota === "/cursos/logistica") {
            enviarArquivos(res, "pages/curso-logistica.html", "text/html")
        }
        else if (rota === "/infraestrutura") {
            enviarArquivos(res, "pages/infraestrutura.html", "text/html")
        }
        else if (rota === "/eventos") {
            enviarArquivos(res, "pages/eventos.html", "text/html")
        }
        else if (rota === "/quem-somos") {
            enviarArquivos(res, "pages/quem-somos.html", "text/html")
        }
        else {
            res.writeHead(404, { "Content-Type": "text/plain" })
            res.end("error 404")
        }
    }
}

module.exports = app