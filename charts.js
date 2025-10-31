//DOM y Chart.js estén cargados
window.addEventListener('load', function() {
    console.log('Iniciando carga de gráficas...');
    
    //verifica si Chart.js está disponible
    if (typeof Chart === 'undefined') {
        console.error('Chart.js no está cargado');
        return;
    }
    
    //que los canvas existan
    const statsCanvas = document.getElementById('statsChart');
    const shareCanvas = document.getElementById('shareChart');
    const scheduleCanvas = document.getElementById('scheduleChart');
    
    if (!statsCanvas || !shareCanvas || !scheduleCanvas) {
        console.error('No se encontraron los elementos canvas');
        return;
    }
    
    console.log('Canvas encontrados, creando gráficas...');
    


    try {
        const statsCtx = statsCanvas.getContext('2d');
        const statsChart = new Chart(statsCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Flights',
                    data: [5, 7, 6, 5, 7, 6],
                    backgroundColor: [
                        '#b7933a',
                        '#b7933a',
                        '#b7933a',
                        '#2e4e4b',
                        '#2e4e4b',
                        '#b7933a'
                    ],
                    borderRadius: 5,
                    barThickness: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 8,
                        ticks: {
                            stepSize: 1
                        },
                        grid: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        console.log('Gráfica de estadísticas creada');
    } catch (error) {
        console.error('Error creando gráfica de estadísticas:', error);
    }






    try {
        const shareCtx = shareCanvas.getContext('2d');
        const shareChart = new Chart(shareCtx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [18, 15, 15, 35],
                    backgroundColor: [
                        '#b7933a',
                        '#2e4e4b',
                        '#3ba89f',
                        '#1890b2'
                    ],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            },
            plugins: [{
                  
                  id: 'centerText',
                beforeDraw: function(chart) {
                    const width = chart.width;
                    const height = chart.height;
                    const ctx = chart.ctx;
                    
                    ctx.restore();
                    ctx.font = 'bold 16px Arial';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = '#2e4e4b';
                    const text = 'Flight Share'; 
                    const textX = Math.round((width - ctx.measureText(text).width) / 2);
                    const textY = height / 2.1;
                    
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        });
        console.log('Gráfica de Flight Share creada');
    } catch (error) {
        console.error('Error creando gráfica de Flight Share:', error);
    }




    try {
        const scheduleCtx = scheduleCanvas.getContext('2d');
        
        const gradient1 = scheduleCtx.createLinearGradient(0, 0, 0, 250);
        gradient1.addColorStop(0, 'rgba(183, 147, 58, 0.3)');
        gradient1.addColorStop(1, 'rgba(183, 147, 58, 0.0)');
        
        const gradient2 = scheduleCtx.createLinearGradient(0, 0, 0, 250);
        gradient2.addColorStop(0, 'rgba(46, 78, 75, 0.3)');
        gradient2.addColorStop(1, 'rgba(46, 78, 75, 0.0)');

        const scheduleChart = new Chart(scheduleCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Passengers',
                        data: [2, 3.5, 2.5, 4, 3, 5],
                        borderColor: '#b7933a',
                        backgroundColor: gradient1,
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 5,
                        pointBackgroundColor: '#b7933a',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    },
                    {
                        label: 'Flights',
                        data: [1.5, 2, 4, 3, 5, 3.5],
                        borderColor: '#2e4e4b',
                        backgroundColor: gradient2,
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 5,
                        pointBackgroundColor: '#2e4e4b',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            },
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6,
                        ticks: {
                            stepSize: 1
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        console.log('Gráfica de Flight Schedule creada');
    } catch (error) {
        console.error('Error creando gráfica de Flight Schedule:', error);
    }
    
    console.log('Todas las gráficas cargadas exitosamente');
});