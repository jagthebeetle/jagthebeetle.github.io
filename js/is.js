var scrollPos;
var unset = true;
var last = false;

document.addEventListener('DOMContentLoaded',function() {
	var header = document.getElementsByTagName("header")[0];
	
	checkHeader(document.body.scrollTop);
	
	window.onscroll = function() {
		checkHeader(document.body.scrollTop);
	}

	var toggle = document.getElementById("toggle");
	console.log(toggle);

	// hide article
	// toggle.onclick = function() {
	// 	if (!last) {
	// 		var article = document.getElementsByTagName('article');
	// 		article[0].className += "hidden";
	// 		article[1].className = "";
	// 		last = true;
	// 	}
	// };

	function checkHeader(scrollPos) {
		console.log(scrollPos);
		if (unset && scrollPos > 49) {
			header.className += "hard";
			unset = false;
		} else if (!unset && scrollPos <= 49) {
			header.className = "";
			unset = true;
		}
	}

});

	