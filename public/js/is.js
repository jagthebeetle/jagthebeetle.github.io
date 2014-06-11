var scrollPos,
	unset = true,
	last = false;

document.addEventListener('DOMContentLoaded',function() {
	var header = document.getElementsByTagName("header")[0];
	
	scrollyClassCheck(header,document.body.scrollTop,20,'hard');
	
	window.onscroll = function() {
		scrollyClassCheck(header,document.body.scrollTop,20,'hard');
	}

});


// Add a class if we have scrolled past the given threshold
// Likewise, remove that class if we are below it
function scrollyClassCheck(element,scrollPos,threshold,classLabel) {
	if (unset && scrollPos > threshold) {
		element.className += classLabel;
		unset = false;
	} else if (!unset && scrollPos <= threshold) {
		element.className = "";
		unset = true;
	}
}

	