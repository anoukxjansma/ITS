Chart.defaults.global.defaultFontColor = 'white';



var ctx = document.getElementById('myChartBar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Voedsel', 'Water', 'Zuurstof', 'Brandstof'],
        datasets: [{
            label: 'Voorraden aan boord (aantal dagen)',
            data: [50, 48, 85, 80],
                backgroundColor: [
                    '#5083ea',
                    '#d1c1d6',
                    '#9b0aef',
                    '#eaab0c',
                ],
        }]
    },


    options: {
        responsive: true,
        maintainAspectRatio:false,

        title: {
            display: true,
            text: 'Voorraden aan boord (aantal dagen)'
        },
        
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }

            }],
            yAxes: [{
                display: true,
            
        }]
        }
    }
});
