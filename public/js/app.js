window.App = Ember.Application.create();

App.IndexView = Ember.View.extend({
	didInsertElement:function() {
		// waypoints binding... slightly icky?
		$(window).on('waypointed',$.proxy(this.waypointed, this));

		var $container = $(".articlecontainer").first();
		$container.waypoint(function(direction) {
			$("header").toggleClass("hard");
		},{offset:-20});
		$('.loadingspincircle').waypoint(function(direction) {
			if (direction == "down")
				$(window).trigger('waypointed');
		},{offset:'100%'});
	},
	willDestroyElement: function(){
	  // have to use the same argument to `off` that we did to `on`
	  $(window).off('waypointed', $.proxy(this.waypointed, this));
	},
	waypointed:function() {
		this.get('controller').send('load');
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