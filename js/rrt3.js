(function() {
	/* CONSTANTS */
	var ITERATIONS = 2000;
	var ZERO = new THREE.Vector3(0, 0, 0);
	var EXTENT = 500;
	var CAMERA_HEIGHT = 30;
	var FAR_FRUSTUM = EXTENT * Math.sqrt(2);
	var CAMERA_DISTANCE = .5 * FAR_FRUSTUM;

	/* RRT SETUP */
	var treeSeed = [0,0,0];
	var myWorker = new Worker("/js/worker.js");
	myWorker.onmessage = function(e) {
		if (e.data) {
			drawLine( e.data[0], e.data[1], e.data[2] );
		}
	}

	/* THREES SETUP */
	// DOM
	var canvas = document.createElement('canvas');
	var container = document.getElementById('rrt3d');
	canvas.width = container.clientWidth;
	canvas.height = container.clientHeight;
	container.appendChild(canvas);
	// RENDER OBJECTS
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, canvas.width/canvas.height,
		0.1, FAR_FRUSTUM );
	var renderer = new THREE.WebGLRenderer({ 
		antialias: true,
		canvas: canvas 
	});
	var vectorCache = {};
	vectorCache[treeSeed[0] + ',' + treeSeed[1] + ',' + treeSeed[2] ] = ZERO;
	renderer.setSize( canvas.width, canvas.height );
	// RENDER CLOSURE
	var nextV, geometry, material;
	function drawLine(src, dst, optColor) {
		vectorCache[dst[0]+','+dst[1]+','+dst[2]] = 
			nextV = new THREE.Vector3( dst[0], dst[1], dst[2] );
		geometry = new THREE.Geometry();
		geometry.vertices.push(
			vectorCache[src[0]+','+src[1]+','+src[2]],
			nextV);
		material = new THREE.LineBasicMaterial({
			color: optColor || 0x0059b3,
			linewidth: 2
		});
		scene.add( new THREE.Line( geometry, material ) );
	}

	// RENDER CHECK
	var visible, scrollTimeout, renderRequestId;
	function debounceRenderCheck(delay) {
		return function() {
			window.clearTimeout( scrollTimeout );
			scrollTimeout = window.setTimeout(visibilityCheck, delay);

			function visibilityCheck() {
				var canvasPos = canvas.getBoundingClientRect();
				if (canvasPos.top > window.innerHeight || canvasPos.bottom < 0) {
					renderRequestId && window.cancelAnimationFrame( renderRequestId );
					renderRequestId = null;
				} else {
					!renderRequestId && render();
				}
			}
		};
	}

	// RENDER LOOP
	var i = 0;
	function render() {
			camera.position.set(
				CAMERA_DISTANCE*Math.cos(i / 100),
				CAMERA_HEIGHT,
				CAMERA_DISTANCE*Math.sin(i / 100));
			camera.lookAt( ZERO );
			renderer.render( scene, camera );
			if (++i <= ITERATIONS) { myWorker.postMessage(true); }
			renderRequestId = requestAnimationFrame( render );
	}

	/* MAIN */
	myWorker.postMessage(true);
	document.addEventListener('scroll', debounceRenderCheck(350));
})();
