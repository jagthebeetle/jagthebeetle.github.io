var HALF_EXTENT = 175;
var EXTENT = HALF_EXTENT * 2;
var MAX_DISTANCE = Math.sqrt(HALF_EXTENT * HALF_EXTENT * 3);
var FIRST = [0,0,0];
var NODES = [FIRST];

var src, dst, nearestTuple, dMin, absDistance, color;

onmessage = function() {
	dst = randomNode();
	nearestTuple = nearestNode(dst, NODES);
	src = nearestTuple[0];
	dMin = nearestTuple[1];
	dst = aTowardsB(src, dst);
	NODES.push(dst);
	absDistance = distance(dst,FIRST);
	color = 'hsl(' + (360 * absDistance / MAX_DISTANCE) + ',80%,50%)';
	postMessage([src, dst, color]);
}

function randomNode() {
	return [
		HALF_EXTENT - Math.floor(Math.random()*EXTENT),
		HALF_EXTENT - Math.floor(Math.random()*EXTENT),
		HALF_EXTENT - Math.floor(Math.random()*EXTENT)
	];
}

function distance(nodeA,nodeB) {
  var dx = nodeB[0] - nodeA[0];
  var dy = nodeB[1] - nodeA[1];
  var dz = nodeB[2] - nodeA[2];
  return Math.sqrt(dx*dx+dy*dy+dz*dz);
}

function nearestNode(node, nodes) {
	var d0 = distance(node,nodes[0]);
	var min = nodes[0];
	var dMin = nodes.reduce(function(prev,cur,i,arr) {
		dCur = distance(node, cur);
		if (dCur < prev) {
			min = cur;
			return dCur;
		}
		return prev;
	}, d0)

	return [min,dMin];
}

function aTowardsB(a, b) {
  var xy = Math.atan2(b[1] - a[1], b[0] - a[0]);
  var zx = Math.atan2(b[0] - a[0], b[2] - a[2]);
  return [a[0] + 3 * Math.sin(zx), a[1] + 3 * Math.sin(xy), a[2] + 3 * Math.cos(zx)];
}

