create database worshipjesus;
use WorshipJesus;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    idade int,
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE pontuaçao (
	id INT PRIMARY KEY AUTO_INCREMENT,
	pontuaçao int,
    fkUsuario int,
    constraint foreign key (FkUsuario) references usuario(idusuario)
);

insert into usuario values
(default, 'Cicera', 67, 'cicera.alves@sptech.school', '123456');

SELECT idUsuario, nome, email FROM usuario;

select * from usuario;

select * from pontuaçao;	

-- KPI TOTAL USUARIOS
select count(idUsuario) as TotalUsuarios from usuario;	

-- inserir pontuação
insert into pontuaçao (pontuaçao, fkUsuario) values
(7, 3);

select idUsuario from usuario where nome = 'Thais';

-- kpi número de tentativas
select count(id) as QtdTentativas from pontuaçao where fkUsuario = 2;

-- grafico 3 maiores pontuação
SELECT usuario.nome as Nome,
pontuaçao.pontuaçao as Pontuação
FROM usuario
JOIN pontuaçao ON usuario.idUsuario = pontuaçao.FkUsuario
ORDER BY pontuaçao.pontuaçao DESC
LIMIT 3;






