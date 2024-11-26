var database = require("../database/config")

function InserirPontuaçao(pontuaçao, FkUsuario) {
    
    var instrucaoSql = `
        insert into pontuaçao (pontuaçao, fkUsuario) values ('${pontuaçao}', '${FkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    InserirPontuaçao,
};