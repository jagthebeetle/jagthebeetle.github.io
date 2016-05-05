(function() {
	// CONSTANTS
	var ITERATIONS = 2000;
	var ZERO = new THREE.Vector3(0, 0, 0);
	var HALF_EXTENT = 250;
	var CAMERA_HEIGHT = 30;
	var CAMERA_DISTANCE = HALF_EXTENT*Math.sqrt(2);
	var FAR_FRUSTUM = 2 * CAMERA_DISTANCE;

	// RRT SETUP
	var treeSeed = [0,0,0];

	// THREES SETUP
	var canvas = document.createElement('canvas');
	var container = document.getElementById('rrt3d')
	canvas.width = container.clientWidth;
	canvas.height = container.clientHeight;
	container.appendChild(canvas);
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, canvas.width/canvas.height, 0.1, FAR_FRUSTUM );
	var renderer = new THREE.WebGLRenderer({ 
		antialias: true,
		canvas: canvas 
	});
	var vectorCache = {};
	vectorCache[treeSeed[0] + ',' + treeSeed[1] + ',' + treeSeed[2] ] = ZERO;
	renderer.setSize( canvas.width, canvas.height );
	camera.position.set( CAMERA_DISTANCE, CAMERA_HEIGHT, CAMERA_DISTANCE );
	camera.lookAt( ZERO );

	var nextV, GEOMETRY, MATERIAL;
	function drawLine(src, dst, optColor) {
		vectorCache[dst[0]+','+dst[1]+','+dst[2]] = nextV = new THREE.Vector3( dst[0], dst[1], dst[2] );
		GEOMETRY = new THREE.Geometry();
		GEOMETRY.vertices.push(
			vectorCache[src[0]+','+src[1]+','+src[2]],
			nextV
		);
		MATERIAL = new THREE.LineBasicMaterial({
			color: optColor || 0x0059b3,
			linewidth: 2
		});
		scene.add( new THREE.Line( GEOMETRY, MATERIAL ) );
	}

	var i = 0;


	var myWorker = new Worker("/js/worker.js");
	myWorker.onmessage = function(e) {
		if (e.data) {
			drawLine( e.data[0], e.data[1], e.data[2]);
		}
	}

	function render() {
		camera.position.set(
			CAMERA_DISTANCE*Math.cos(i/100),
			CAMERA_HEIGHT,
			CAMERA_DISTANCE*Math.sin(i/100));
		camera.lookAt( ZERO );
		renderer.render( scene, camera );

		if (++i <= ITERATIONS) { myWorker.postMessage(true); }
		requestAnimationFrame( render );
	};

	myWorker.postMessage(ITERATIONS--);
	render();
})();
