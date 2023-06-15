const { connection } = require("../database/connection")

class CampoDeEstagio {
    async cadastrar(nomeCampo, endereco, email, senha) {
        const [result] = await connection.execute(
            "INSERT INTO localEstagio (nomeCampo, endereco) VALUES (?,?)",
            [nomeCampo, endereco]
        )

        const userId = result.insertId
        connection.execute(
            "INSERT INTO usuario (login, senha, tipoUsuario, idLocalEstagio) VALUES (?,?,?,?)",
            [email, senha, 1, userId]
        )
    }
}

module.exports = { CampoDeEstagio }
