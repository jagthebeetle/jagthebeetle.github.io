App.Posts = Ember.Object.extend();

App.Posts.reopenClass({
	recent:function() {
		return $.getJSON("http://localhost:3000/api").then(function(response) {
			return response;
		});
	},
	findByDate:function(dateLimit) {
  		return $.getJSON("http://localhost:3000/api/" + dateLimit)
  			.then(function(response) {
  				return response;
  			});
  	}
});