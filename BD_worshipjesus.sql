create database worshipjesus;
use WorshipJesus;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    idade int,
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE pontuaçao (
	id INT PRIMARY KEY AUTO_INCREMENT,
	pontuaçao int,
    FkUsuario int,
    constraint foreign key (FkUsuario) references usuario(id)
);

insert into usuario values
(default, 'Thais', 18, 'thais.fosaluza@sptech.school', '123456');

select * from usuario;

select * from pontuaçao;

truncate table usuario;

-- KPI TOTAL USUARIOS
select sum(id) from usuario;

-- inserir pontuação
insert into pontuaçao (pontuaçao, fkUsuario) values
(10, 2);

-- kpi número de tentativas
select count(id) from pontuaçao where fkUsuario = 1;






