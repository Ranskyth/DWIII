const url = require("url")
const fs = require("fs")

const app = {
    rotas: (req, res) => {

        let rota = url.parse(req.url).pathname

        if (rota === "/") {
            res.writeHead(200, { "Content-type": "text/plan" })
            res.end("oiiii")
        }
        else if (rota === "/gabriel") {
            res.writeHead(200, { "Content-type": "text/plan" })
            
            const html = fs.readFileSync("../pages/gabriel.html")
            console.log(html)
            res.end("oii")
        }
        else if (rota === "/diego") {
            res.writeHead(200, { "Content-type": "text/plan" })
            res.end("sobre")
        }
        else {
            res.writeHead(404, { "Content-type": "text/plan" })
            res.end("error 404")
        }
    }
}

module.exports = app