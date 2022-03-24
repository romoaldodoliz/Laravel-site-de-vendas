
/*** Gráfico de barra ddos produtos mas vendidos ***/

     $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "/getDataKpis",
            'data': {},
            datatype: "json",
            success: function(data) {
                if(data) {
                    console.log(data);
                    // Gráfico de barra de produtos mais ventidos
                    const ctx = document.getElementById('ChartBarProduct').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            
                            labels: data["productNameKpi"],
                            datasets: [{
                                label: 'Produtos',
                                data: data["quantityProductKpi"],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                },
                                x: {
                                    grid: {
                                    offset: true
                                    }
                                }
                            }
                        }
                    });
                }
            },
            error: function (data) {
                console.log(data);
                }
            });
    });



    /*** Gráfico de barra das verndas e cancelados e devoluções dos meses do ano ***/
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "/getDataKpis",
            'data': {},
            datatype: "json",
            success: function(data) {
                if(data) {
                    console.log(data);
                    // Gráfico de barra de produtos mais ventidos
                    const ctx = document.getElementById('ChartBarSaleMensais').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            
                            labels: ['Janeiro', 'Fevereiro', 'Março'],


                            
                            datasets: [
                                {
                                label: 'Vendidos',
                                data: data["quantityProductKpi"],
                                backgroundColor: [
                                    '#9AFF9A'
                                ],
                                borderColor: [
                                    '#9AFF9A'
                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'Cancelados',
                                data: data["quantityProductKpi"],
                                backgroundColor: [
                                    '#CD0000',
                                ],
                                borderColor: [
                                    '#CD0000'
                                ],
                                borderWidth: 1
                            },
                            {
                                label: 'Devoluções',
                                data: data["quantityProductKpi"],
                                backgroundColor: [
                                    '#FFA54F',
                                ],
                                borderColor: [
                                    '#FFA54F'
                                ],
                                borderWidth: 1
                            },
                        ]
                        },
                        options: {
                            indexAxis: 'y',
                            scales: {
                                y: {
                                    beginAtZero: true
                                },
                                x: {
                                    grid: {
                                    offset: true
                                    }
                                }
                            },
                            elements: {
                                bar: {
                                  borderWidth: 2,
                                }
                              },
                              responsive: true,
                        }
                    });
                }
            },
            error: function (data) {
                console.log(data);
                }
            });
    });
