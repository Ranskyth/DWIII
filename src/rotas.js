const url = require("url")

const 

const app = {
    rotas: (req, res) => {

        let rota = url.parse(req.url).pathname

        if (rota === "/oi") {
            res.writeHead(200, { "Content-type": "text/plan" })
            res.end("oiiii")
        }
        else if (rota === "/me") {
            res.writeHead(200, { "Content-type": "text/plan" })
            res.end("meeeeeeee")
        }
        else {
            res.writeHead(404, { "Content-type": "text/plan" })
            res.end("error 404")
        }
    }
}

module.exports = app