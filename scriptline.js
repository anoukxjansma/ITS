Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;


var ctx = document.getElementById('myChartLine').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dag 1', 'Dag 2', 'Dag 3', 'Dag 4', 'Vandaag'],
        datasets: [{
            label: 'gemiddeld',
            data: [40, 10, 15, 17, 1],
            backgroundColor: [
                'rgba(234, 171, 12, 0.2)',
                
            ],
            borderColor: [
                'rgba(234, 171, 12, 1)',
                'rgba(155, 10, 239, 1)',
                'rgba(155, 10, 239, 1)',
                'rgba(155, 10, 239, 1)',
                'rgba(155, 10, 239, 1)',

               
            ],
            borderWidth: 5
        }]
    },

options: {
    responsive: true,
    maintainAspectRatio:false,

    title: {
        display: true,
        text: 'Km per uur per dag (X duizend)'
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
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