what
====
*A playground, for thinking and web-tinkering*

More to the point, as I've moved my entries into MongoDB, this repo, as is, serves as a web app that can load up JSON objects of the form
```javascript
{
	title:String,
	created:Date,
	body:String
}
```
into a browser window from a server. My skepticism cringes at the idea of its being a "blog," but if this playground of mine were hosted anywhere, it would undoubtedly be that. So this repo might more succinctly be called a blog skeleton with a very opinionated front end, featuring infinite scrolling!

## Built with:
* Server-side:
  * express
  * mongoose
  * node
* Client-side:
  * Ember.js
  * waypoints.js (because why not?)

NB. It also has a very random site living and [jagthebeetle.github.io](http://jagthebeetle.github.io), purely in existence for the purpose of testing Google Tag Manager and Analytics.
