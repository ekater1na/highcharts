Highcharts.theme = {
    colors: ['#b712be', '#31be31', '#7070d2'],
    title: {
        style: {color: '#a80e4e'}
    }
};
Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('chart', {
    title: {text: 'Chart'},
    subtitle: {text: 'Fiscal Year 2020'},
    xAxis: {
        title: {text: 'Month'},
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
        }
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
    title: {text: 'Area'},
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
            color: '#6586ce'
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
        title: {text: 'Column'},
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
    title: {text: 'Spline'},
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
    title: {text: 'Pie'},
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
    title: {text: 'Polar'},
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

Highcharts.chart('data-point', {
    chart: {type: 'bar'},
    title: {text: 'Data-point'},
    xAxis: {
        title: {text: 'Month'},
        type: 'category',
        reversed: false
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    series: [
        {
            name: "Model R",
            data: [['Jan', 5], ['Feb', 8], {'Mar': 2, y: 11, name: 'Main', color: '#a80e4e'}, ['Apr', 19], ['May', 7], ['Jun', 9]],
            dataSorting: {enabled: true, sortKey: 'name'},
            color: '#23726a'
        },
    ],
    legend: {enabled: true}
});

Highcharts.chart('csv', {
    chart: {type: 'bar'},
    title: {text: 'CSV'},
    xAxis: {
        title: {text: 'Month'},
        type: 'category',
        reversed: false
    },
    yAxis: {
        title: {text: 'Sales'},
        tickInterval: 5
    },
    data: {csvURL: 'https://ekater1na.github.io/highcharts-app//data.csv'},
    // data: {csvURL: 'http://localhost:63342/highcharts-app/data.csv'},
    legend: {enabled: true}
});

const serviceURL = 'data.php';

const chart = Highcharts.chart('live', {
    chart: {
        type: 'line',
        events: {
            load: pullData
        }
    },
    title: {text: 'Dashboard'},
    subtitle: {text: 'Usage'},
    xAxis: {
        labels: {
            enabled: false
        },
        tickInterval: 1
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {text: 'Usage'},
        tickInterval: 10
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Memory Usage',
        data: [15, 11, 10, 18, 20, 15, 22, 17, 19, 14],
        color: '#469f14'
    }],
    legend: {enabled: true}
});

function pullData() {
    setInterval(doPullData, 10000);
}

async function doPullData() {
    const result = await fetch(serviceURL).then(res => res.json());
    if (result.ok) {
        const data = await result.json();
        chart.series[0].addPoint(
            [data[0], data[1]],
            true,
            chart.series[0].data.length >= 10,
            true);
    }
}
