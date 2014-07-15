define(['regard-highcharts'], [], function() {
  var bar = function(data, xAxisLabel, yAxisLabel) {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      xAxis: {
        title: {
          text: xAxisLabel
        },
        categories: data.map(function(x) {
          return x.name;
        }),
      },
      yAxis: {
        min: 0,
        title: {
          text: yAxisLabel
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      colors: ['#73B02D'],
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        data: data.map(function(x) {
          return +x.value;
        })
      }]
    };
  }

  return {
    default: {
      bar: bar
    }
  };
});
