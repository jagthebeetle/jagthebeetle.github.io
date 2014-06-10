var scrollPos;
var unset = true;

document.addEventListener('DOMContentLoaded',function() {
	var header = document.getElementsByTagName("header")[0];
	console.log(header);
	watchHeader(document.body.scrollTop);
	window.onscroll = function() {
		watchHeader(document.body.scrollTop);
	}

	function watchHeader(scrollPos) {
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

	// hide article
	// window.setTimeout(function() {
	// 	document.getElementsByTagName('article')[0].className += "hidden";
	// },2000);