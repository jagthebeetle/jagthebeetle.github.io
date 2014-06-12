App.IndexController = Ember.ArrayController.extend({
	atEnd:false,
	actions:{
		load:function() {
			if (!this.get('atEnd')) {
				// prevent multiple loads
				if (this.get('loading')) return;
				var date = this.get('content').get('lastObject').created;
				this.set('loading',true);
				// propagate event up to route
				this.get('target').send('apiQuery',date);
			}
		},
		// be notified by route
		loaded:function(payload) {
			if (payload.get('length') < 1) {
				this.set('atEnd',true);
			} else {
				this.pushObjects(payload);
				Ember.run.scheduleOnce('afterRender', this, function() {
					$.waypoints('refresh');
					this.set('loading',false);
				});
			}
		}
	}
});