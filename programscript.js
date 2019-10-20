 var options = {
            chart: {
                height: 350,
                type: 'bar',

            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            series: [{
                data: [20, 30, 20, 10, 20]
            }],
            xaxis: {
                categories: ['Groceries', 'Dining', 'Academics', 'Recreation', 'Savings'],
            }
        }

       var chart = new ApexCharts(
            document.querySelector("#chart"),
            options
        );
        
        chart.render();