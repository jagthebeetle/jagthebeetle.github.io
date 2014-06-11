window.App = Ember.Application.create();

App.IndexView = Ember.View.extend({
	didInsertElement:function() {
		var $container = $(".articlecontainer").first();
		$container.waypoint(function(direction) {
			$("header").toggleClass("hard");
		},{offset:-20})
		$('.loadingspincircle').waypoint(wayload,{offset:'100%'});
	}
});

Ember.Handlebars.helper('format-date',formatDate);

function formatDate(date) {
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	if (!date)
		return "";
	else {
		date = new Date(date);
		return date.getDate() + " "
			 + months[date.getMonth()] + " "
			 + date.getFullYear();
	}
}

function wayload(direction) {
			console.log("waypoint event fired");
			if (direction == "down") {
				var date = $('article').last().data('date');
				console.log(date);
				$.getJSON("http://localhost:3000/api/" + date).then(function(response) {
					if (response.length === 0) {
						console.log("No more!");
						$('.loadingspincircle').hide();
						$('.endoftheroad').show();
					} else {
						$.each(response,function(index,entry) {
							var article_string = "<article data-date=\"" 
							+ entry.created + "\"><h1>" + entry.title + "</h1>"
							+ "<em class=\"date\">" + formatDate(entry.created)
							+ "</em>" + entry.body + "</article>";
							$(article_string).insertBefore(".loadingspincircle");
						});
					}
					$.waypoints('refresh');
				});
			}
		}