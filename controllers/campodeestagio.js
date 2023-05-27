const { CampoDeEstagio } = require("../models/campodeestagio")

function cadastrar(req, res) {
    const model = new CampoDeEstagio()
    model.cadastrar(
        req.body.nomeCampo,
        req.body.endereco,
        req.body.email,
        req.body.senha
    )
    res.end("cadastrado com sucesso (eu acho (não olhei))")
}

module.exports = { cadastrar }
