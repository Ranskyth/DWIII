const fs = require("fs")

const enviarArquivos = (res, arquivo, fileType) => {
    try {
        const _arquivo = fs.readFileSync(arquivo)
        res.writeHead(200, { "Content-Type": fileType })
        res.end(_arquivo)
    } catch (erro) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Erro ao carregar a página")
        console.log(erro)
    }
}

module.exports = enviarArquivos