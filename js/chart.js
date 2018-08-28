window.onload = function() {
  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Passing Accuracy'
    },
    axisY: {
      includeZero: false
    },
    data: [
      {
        type: 'line',
        dataPoints: [
          { y: 88 },
          { y: 64 },
          {
            y: 93,
            indexLabel: 'highest',
            markerColor: 'red',
            markerType: 'triangle'
          },
          { y: 76 },
          { y: 90 },
          { y: 70 },
          {
            y: 60,
            indexLabel: 'lowest',
            markerColor: 'DarkSlateGrey',
            markerType: 'cross'
          },
          { y: 79 },
          { y: 66 },
          { y: 79 },
          { y: 89 }
        ]
      }
    ]
  });
  setTimeout(function() {
    chart.render();
  }, 1000);
};
