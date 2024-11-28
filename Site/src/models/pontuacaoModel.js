var database = require("../database/config")

function InserirPontuacao(pontuaçao, fkUsuario) {
    
    var instrucaoSql = `
        insert into pontuaçao (pontuaçao, fkUsuario) values ('${pontuaçao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function QtdTentativasUsuario(fkUsuario) {
    
    var instrucaoSql = `
        select count(id) as QtdTentativas from pontuaçao where fkUsuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function TotalUsuarios(idUsuario) {
    
    var instrucaoSql = `
        select count(idUsuario) as TotalUsuarios from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirPontuacao,
    QtdTentativasUsuario,
    TotalUsuarios
};