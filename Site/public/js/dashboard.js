const quizScore = sessionStorage.getItem("quizScore");

const pontuacaoAtual = document.getElementById("pontuacao-atual");
const QtdTentativas = document.getElementById("qtd-tentativas");
const TotalUsuarios = document.getElementById("total-usuarios");

pontuacaoAtual.innerHTML = `${quizScore}/10`;

const Incorretas = 10 - quizScore;
const PorcentagemErro = 10 * Incorretas;
const PorcentagemAcerto = 10 * quizScore;

let Top1 = "";
let Top2 = "";
let Top3 = "";
let Pont1 = 0;
let Pont2 = 0;
let Pont3 = 0;

// Função para buscar os dados de tentativas
function buscarTentativas() {
    return fetch("/pontuacao/QtdTentativasUsuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            QtdTentativas.innerHTML = json[0].QtdTentativas;
        });
}

// Função para buscar o total de usuários
function buscarTotalUsuarios() {
    return fetch("/pontuacao/TotalUsuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            TotalUsuarios.innerHTML = json[0].TotalUsuarios;
        });
}

// Função para buscar os Top 3 usuários
function buscarTop3Usuarios() {
    return fetch("/pontuacao/Top3Usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuarioServer: sessionStorage.ID_USUARIO
        }),
    })
        .then(resposta => resposta.json())
        .then(json => {
            Top1 = json[0].Nome;
            Top2 = json[1].Nome;
            Top3 = json[2].Nome;

            Pont1 = json[0].Pontuação;
            Pont2 = json[1].Pontuação;
            Pont3 = json[2].Pontuação;
        });
}

// Função para criar os gráficos
function criarGraficos() {
  const labels = [Top1, Top2, Top3];

  const data = {
      labels: labels,
      datasets: [
          {
              label: 'Pontuação',
              data: [Pont1, Pont2, Pont3], 
              backgroundColor: [
                  "#373a55", 
                  "#555555", 
                  "#373a55"
              ],
              borderColor: [
                  "#373a55", 
                  "#555555", 
                  "#373a55" 
              ],
              borderWidth: 1,
          }
      ],
  };
  
  const config = {
      type: "bar",
      data: data,
      options: {
          plugins: {
              legend: {
                  display: false, 
              },
          },
          scales: {
              x: {
                  grid: {
                      display: false, 
                  },
                  type: 'category', 
                  labels: labels, 
              },
              y: {
                  grid: {
                      display: false, 
                  },
              },
          },
      },
  };
  
  // Criação do gráfico
  const myChart = new Chart(document.getElementById("chartJS"), config);
  

    const labels2 = ["Corretas", "Incorretas"];
    const data2 = {
        labels: labels2,
        datasets: [
            {
                label: "Porcentagem",
                data: [PorcentagemAcerto, PorcentagemErro],
                backgroundColor: [
                    "#373a55",
                    "#555555",
                ],
            },
        ],
    };

    const config2 = {
        type: "pie",
        data: data2,
        options: {},
    };

    const myChart2 = new Chart(document.getElementById("chartJS2"), config2);
}

// Aguarda todas as requisições serem concluídas
Promise.all([buscarTentativas(), buscarTotalUsuarios(), buscarTop3Usuarios()])
    .then(() => {
        criarGraficos();
    })
    .catch(error => {
        console.error("Erro ao carregar os dados:", error);
    });
















