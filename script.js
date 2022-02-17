Highcharts.theme = {
    colors: ['#740779', '#31be31', '#5656e1'],
    title: {
        style: {color: '#a80e4e'}
    }
};
Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('chart', {
    title: {text: 'Sales'},
    subtitle: {text: 'Fiscal Year 2020'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [5, 8, 11, 19, 20, 26],
            color: 'red'
        },
        {
            name: "Model R2",
            data: [2, 20, 3, 10, 27, 20],
            color: 'gray'
        }
    ],
    legend: {enabled: true}
});

Highcharts.chart('area', {
    chart: {type: 'area'},
    title: {text: 'Sales'},
    subtitle: {text: 'Fiscal Year 2020'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [5, 8, 11, 19, 20, 26],
            color: 'blue'
        },
    ],
    legend: {enabled: true}
});
Highcharts.chart('bar', {
    chart: {type: 'bar'},
    title: {text: 'Sales'},
    subtitle: {text: 'Fiscal Year 2020'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [5, 8, 11, 19, 20, 26],
            color: 'green'
        },
    ],
    legend: {enabled: true}
});
Highcharts.chart('column',
    {
        chart: {type: 'column'},
        title: {text: 'Sales'},
        subtitle: {text: 'Fiscal Year 2020'},
        xAxis: {
            title: {text: 'Month'},
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {text: 'Sales'},
            tickInterval: 5
        },
        series: [
            {
                name: "Model R",
                data: [5, 8, 11, 19, 20, 26],
                color: 'pink'
            },
        ],
        legend: {enabled: true}
    });

Highcharts.chart('spline', {
    chart: {type: 'spline'},
    title: {text: 'Sales'},
    subtitle: {text: 'Fiscal Year 2020'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [5, 8, 11, 19, 20, 26],
            color: 'purple'
        },
        {
            name: "Model R2",
            data: [2, 20, 3, 10, 27, 20],
            color: 'orange'
        }
    ],
    legend: {enabled: true}
});

Highcharts.chart('pie', {
    chart: {type: 'pie'},
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.1f} %'
            }
        }
    },
    title: {text: 'Sales'},
    series: [
        {
            name: "Model R",
            data: [5, 6, 11, 2, 3, 4],
        },
    ],
    legend: {enabled: true}
});

Highcharts.chart('polar', {
    chart: {polar: true},
    title: {text: 'Sales'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [5, 8, 11, 19, 20, 26],
            color: 'blue'
        },
    ],
    legend: {enabled: true}
});
