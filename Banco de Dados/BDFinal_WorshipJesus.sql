create database worshipjesus;
use worshipjesus;

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
(default, 'Cicera', 67, 'cicera.alves@sptech.school', '123456'),
(default, 'Andreia', 48, 'andreia.fosaluza@gmail.com', '123456'),
(default, 'Thais', 19, 'thais.fosaluza@sptech.school', '123456'),
(default, 'Paulo', 53, 'paulorogerio.fosaluza@gmail.com', '123456'),
(default, 'Felipe', 20, 'felipe.santos@gmail.com', '123456');

insert into usuario values
(default, 'Lucas', 25, 'lucas.martins@gmail.com', '123456'),
(default, 'Mariana', 32, 'mariana.souza@sptech.school', '123456'),
(default, 'Gabriel', 28, 'gabriel.oliveira@gmail.com', '123456'),
(default, 'Ana', 35, 'ana.silva@sptech.school', '123456'),
(default, 'João', 41, 'joao.almeida@gmail.com', '123456'),
(default, 'Beatriz', 29, 'beatriz.lima@sptech.school', '123456'),
(default, 'Ricardo', 38, 'ricardo.ferreira@gmail.com', '123456'),
(default, 'Camila', 24, 'camila.rocha@sptech.school', '123456'),
(default, 'Rafael', 30, 'rafael.pereira@gmail.com', '123456'),
(default, 'Fernanda', 27, 'fernanda.costa@sptech.school', '123456');

insert into pontuaçao (pontuaçao, fkUsuario) values
(8, 1),
(6, 2),
(7, 3),
(5, 4),
(9, 5),
(7, 6),
(8, 7),
(6, 8),
(9, 9),
(5, 10),
(7, 11),
(8, 12),
(6, 13),
(10, 14),
(8, 15);




SELECT idUsuario, nome, email FROM usuario;

select * from usuario;

select * from pontuaçao;

truncate table pontuaçao;

-- KPI TOTAL USUARIOS
select count(idUsuario) as TotalUsuarios from usuario;	

-- inserir pontuação
insert into pontuaçao (pontuaçao, fkUsuario) values
(7, 4);

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

