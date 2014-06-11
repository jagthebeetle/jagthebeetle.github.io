App.Posts = Ember.Object.extend();

App.Posts.reopenClass({
	recent:function() {
		return $.getJSON("http://localhost:3000/api").then(function(response) {
			response.map(function(object) {
				console.log(object._id);
			})
			return response;
		});
	}
});