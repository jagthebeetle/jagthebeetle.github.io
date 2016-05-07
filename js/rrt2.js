(function() {
  var ITERATIONS = 5000;
  var container = d3.select('#rrt2d');
  var WIDTH = container.node().clientWidth;
  var HEIGHT = container.node().clientHeight;
  var svg = container.append('svg')
    .attr({
      'width': WIDTH,
      'height': HEIGHT
    });

  svg.append('rect')
    .attr({
      'width': WIDTH,
      'height': HEIGHT,
      'fill': "#000",
      'stroke': 'none'
    });


  var treeSeed = [WIDTH/2, HEIGHT/2];
  var nodes = [treeSeed];

  var maxDistance = .5 * Math.sqrt(WIDTH*WIDTH+HEIGHT*HEIGHT);

  function newPathD(src, dst) {
    return "M" + src[0] + " " + src[1] +
      "L" + dst[0] + " " + dst[1];
  }

  function randomNode() {
    return [Math.random() * WIDTH, Math.random() * HEIGHT];
  }

  function nearestNode(node, nodes) {
    var d0 = distance(node, nodes[0]);
    var min = nodes[0];
    var dMin = nodes.reduce(function(prev, cur, i, arr) {
      dCur = distance(node, cur);
      if (dCur < prev) {
        min = cur;
        return dCur;
      }
      return prev;
    }, d0)

    return [min, dMin];
  }

  function distance(nodeA, nodeB) {
    var dx = nodeB[0] - nodeA[0];
    var dy = nodeB[1] - nodeA[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  function aTowardsB(a, b) {
    var θ = Math.atan2(b[1] - a[1], b[0] - a[0]);
    return [a[0] + 3 * Math.cos(θ), a[1] + 3 * Math.sin(θ)];
  }

  var dst, nearestPair, dMin, i = 0;
  var absDistance, stroke, strokeWidth;
  d3.timer(function render() {
    dst = randomNode();
    nearestPair = nearestNode(dst, nodes);
    src = nearestPair[0];
    dMin = nearestPair[1];
    dst = aTowardsB(src, dst);
    if (dMin < 6) {
      return;
    }
    nodes.push(dst);
    absDistance = distance(dst, treeSeed);
    stroke = 'hsl(' + (360*absDistance/maxDistance) + ',100%,50%)';
    svg.append('path')
      .attr('d', newPathD(src, dst))
      .attr('stroke', stroke);
    if (i++ > ITERATIONS) return true;
  });
})();