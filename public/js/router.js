App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Posts.recent();
  },
  actions: {
  	// triggered by controller
  	apiQuery:function(dateLimit) {
  		var controller = this.get('controller'),
  			payload = App.Posts.findByDate(dateLimit).then(function(data) {
				controller.send('loaded',data);
  			});
  	}
  }
});