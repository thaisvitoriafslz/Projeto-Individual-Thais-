create database worshipjesus;
use WorshipJesus;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    idade int,
	email VARCHAR(50),
	senha VARCHAR(50)
);

insert into usuario values
(default, 'Thais', 18, 'thais.fosaluza@sptech.school', '123456');

select * from usuario;
