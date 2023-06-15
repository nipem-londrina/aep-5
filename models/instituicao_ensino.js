const { connection } = require("../database/connection")

class InstituicaoEnsino {
    async cadastrar(razaoSocial, cnpj, tipoDeInstituicao, nomeContato, telefone, email, endereco, senha) {
        const [result] = connection.execute(
            "INSERT INTO insituicaoDeEnsino (razaoSocial, cnpj, tipoDeInstituicao, nomeContato, telefone, endereco) VALUES (?,?,?,?,?,?)",
            [razaoSocial, cnpj, tipoDeInstituicao, nomeContato, telefone, endereco]
        )

        const userId = result.insertId
        connection.execute(
            "INSERT INTO usuario (login, senha, tipoUsuario, idInstituicaoDeEnsino) VALUES (?,?,?,?)",
            [email, senha, 2, userId]
        )
    }
}

module.exports = { InstituicaoEnsino }
