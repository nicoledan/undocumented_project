$(function () {
    Highcharts.chart('#chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Unauthorized Immigrants by Years of US Residence'
        },
        subtitle: {
            text: 'Source: <a href="http://www.migrationpolicy.org/data/unauthorized-immigrant-population/state/US">Migration Policy Institute</a>'
        },
        xAxis: {
            categories: ['Less than 5', '5-9', '10 to 14', '15 to 19', '20 or more'],
            title: {
                text: "Years"
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' million'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 90,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Unauthorized Immigrants',
            data: [1.9,	2.5, 2.9, 1.8, 1.7]
        }]
    });
});
