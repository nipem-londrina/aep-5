const { CampoEstagio } = require("../models/campo_estagio")

function cadastrar(req, res) {
    const model = new CampoEstagio()
    model.cadastrar(
        req.body.nomeCampo,
        req.body.endereco,
        req.body.email,
        req.body.senha
    )
    res.end("cadastrado com sucesso (eu acho (nao olhei))")
}

module.exports = { cadastrar }
