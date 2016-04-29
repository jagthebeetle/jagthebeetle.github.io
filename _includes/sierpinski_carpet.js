(function() {
var WIDTH = 600;
var HEIGHT = 600;
var svg = d3.select('#srp').append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

var FRACTAL_DEPTH = 6;

/* requiescat in pace
for (var i = 0; i < FRACTAL_DEPTH; i++) {
  var stretch = WIDTH / Math.pow(3, i+1);
  for (var j = 0; j < Math.pow(9, i); j++) {
    var yPos = 1 + 3 * Math.floor(j / Math.pow(3, i));
    var xPos = 1 + 3 * j % Math.pow(3, i+1);
    svg.append('rect')
      .attr('x', xPos * stretch)
      .attr('y', yPos * stretch)
      .attr('width', stretch)
      .attr('height', stretch);
  }
}
*/

(function fillCells(i, j) {
  fillCell(i, j);
  if (i < FRACTAL_DEPTH) {
    window.setTimeout(function() {
      if (j < Math.pow(9, i)) {
        fillCells(i, j+1);
      } else {
        fillCells(i+1, 0)
      }
    }, 200)
  }
})(0, 0);

function fillCell(depth, division) {
  var stretch = WIDTH / Math.pow(3, depth + 1);
  var yPos = 1 + 3 * Math.floor(division / Math.pow(3, depth));
  var xPos = 1 + 3 * division % Math.pow(3, depth+1);
  
  svg.append('rect')
    .attr('x', xPos * stretch)
    .attr('y', yPos * stretch)
    .attr('width', stretch)
    .attr('height', stretch);
}
})();