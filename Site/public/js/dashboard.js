const labels = [
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Temperatura', 
        data: [1, 2, 3],
        backgroundColor: 'rgba(0, 0, 255, 0.7)', // Azul
        borderColor: 'rgba(0, 0, 255, 1)', // Azul forte
        borderWidth: 1, // Espessura da borda,
        
    },
    {
        label: 'Umidade', 
        data: [4, 5, 6],
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Preto
        borderColor: 'rgba(0, 0, 0, 1)', // Preto forte
        borderWidth: 1, // Espessura da borda
    }
    ],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    display: false, // Remove as linhas de fundo no eixo X
                }
            },
            y: {
                grid: {
                    display: false, // Remove as linhas de fundo no eixo Y
                }
            }
        }
    }
};

const labels2 = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Temperatura Média', 
        data: [2, 24, 27, 23, 20, 18],
        backgroundColor: [
            'rgba(0, 0, 255, 0.7)', // Azul
            'rgba(0, 0, 0, 0.7)',   // Preto
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
        ]
    },
    {
        label: 'Umidade Média', 
        data: [90, 89, 93, 87, 88, 82],
        backgroundColor: [
            'rgba(0, 0, 255, 0.7)', // Azul
            'rgba(0, 0, 0, 0.7)',   // Preto
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
            'rgba(0, 0, 255, 0.7)',
            'rgba(0, 0, 0, 0.7)',
        ]
    }
    ]
};

const config2 = {
    type: 'doughnut',
    data: data2,
    options: {}
};

const myChart = new Chart(
    document.getElementById('chartJS'),
    config
);

const myChart2 = new Chart(
    document.getElementById('chartJS2'),
    config2
);

