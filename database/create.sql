CREATE TABLE `autarquia` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`endereco` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `localEstagio` (
	`id` int NOT NULL AUTO_INCREMENT,
	`nomeCampo` varchar(255) NOT NULL,
	`vagasTotais` int NOT NULL DEFAULT '0',
	`endereco` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `insituicaoDeEnsino` (
	`id` int NOT NULL AUTO_INCREMENT,
	`razaoSocial` varchar(255) NOT NULL,
	`cnpj` varchar(255) NOT NULL,
	`tipoDeInstituicao` varchar(255) NOT NULL,
	`nomeContato` varchar(255) NOT NULL,
	`telefone` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`endereco` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usuario` (
	`id` int NOT NULL AUTO_INCREMENT,
	`login` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`tipoUsuario` int NOT NULL,
	`idLocalEstagio` int,
	`idAutarquia` int,
	`IdInstituicaoDeEnsino` int,
	PRIMARY KEY (`id`)
);

CREATE TABLE `solicitacaoEstagio` (
	`id` int NOT NULL AUTO_INCREMENT,
	`razaoSocialInstituicaoDeEnsino` varchar(255) NOT NULL,
	`curso` varchar(255) NOT NULL,
	`periodoSerie` varchar(255) NOT NULL,
	`especialidade` varchar(255) NOT NULL,
	`campoEstagio` varchar(255) NOT NULL,
	`vagasSolicitadas` int NOT NULL,
	`dataInicial` DATE NOT NULL,
	`dataFinal` DATE NOT NULL,
	`horaInicial` DATETIME NOT NULL,
	`horaFinal` DATETIME NOT NULL,
	`idInstituicaoDeEnsino` int NOT NULL,
	`idAutarquia` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `solicitacaoEstagio_localEstagio` (
	`idsolicitacaoEstagio` int NOT NULL,
	`IdLocalEstagio` int NOT NULL,
	`vagasPreenchidas` int NOT NULL,
	PRIMARY KEY (`idsolicitacaoEstagio`,`IdLocalEstagio`)
);

ALTER TABLE `usuario` ADD CONSTRAINT `usuario_fk0` FOREIGN KEY (`idLocalEstagio`) REFERENCES `localEstagio`(`id`);

ALTER TABLE `usuario` ADD CONSTRAINT `usuario_fk1` FOREIGN KEY (`idAutarquia`) REFERENCES `autarquia`(`id`);

ALTER TABLE `usuario` ADD CONSTRAINT `usuario_fk2` FOREIGN KEY (`IdInstituicaoDeEnsino`) REFERENCES `insituicaoDeEnsino`(`id`);

ALTER TABLE `solicitacaoEstagio` ADD CONSTRAINT `solicitacaoEstagio_fk0` FOREIGN KEY (`idInstituicaoDeEnsino`) REFERENCES `insituicaoDeEnsino`(`id`);

ALTER TABLE `solicitacaoEstagio` ADD CONSTRAINT `solicitacaoEstagio_fk1` FOREIGN KEY (`idAutarquia`) REFERENCES `autarquia`(`id`);

ALTER TABLE `solicitacaoEstagio_localEstagio` ADD CONSTRAINT `solicitacaoEstagio_localEstagio_fk0` FOREIGN KEY (`idsolicitacaoEstagio`) REFERENCES `solicitacaoEstagio`(`id`);

ALTER TABLE `solicitacaoEstagio_localEstagio` ADD CONSTRAINT `solicitacaoEstagio_localEstagio_fk1` FOREIGN KEY (`IdLocalEstagio`) REFERENCES `localEstagio`(`id`);







