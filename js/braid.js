(function() {
  var svg = d3.select('#braid').append('svg')
    .attr('width', 300)
    .attr('height', 300);
  var g = svg.append('g');

  var classes = [
    '#0059b3',
    '#990000',
    '#fd5e53',
  ];

  var stripLength = 10;

  var a1 = 0,
      b1 = 1,
      a2 = 3,
      b2 = 1;
  var x1, x2, y1, y2, index;
  for (var i = 0; i < 19; i++) {
    classes.forEach(function(type, j) {
      index = classes.length * i + j;

      x1 = stripLength * a1;
      x2 = stripLength * a2;
      y1 = stripLength * b1;
      y2 = stripLength * b2;
      y1 += !(index % 2) ? 0 : -2.5;
      y2 += !(index % 2) ? 0 : 2.5;
      x1 += !(index % 2) ? -2.5 : 0;
      x2 += !(index % 2) ? 2.5 : 0;


      var path = g.append('path')
        .attr('d', 'M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2)
        .attr('stroke', type);

      var totalLength = path.node().getTotalLength();
      path.attr("stroke-dasharray", totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(600)
        .delay(200 * index)
        .attr("stroke-dashoffset", 0);
      a1 += (index % 2) ? -1 : 2;
      a2 += (index % 2) ? 2 : -1;
      b1 += (index % 2) ? 2 : -1;
      b2 += (index % 2) ? -1 : 2;
    });
  }
})();
