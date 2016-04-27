angular.module('jag', [
    'ngRoute', 
    'ngMaterial'
  ])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      'enabled': true
    });
    $routeProvider
        .when('/:post*', {
          templateUrl: function(path) {
            var suffixedPath = path.post.replace(/\.html$/, '-partial.html');
            var isPartial = suffixedPath.indexOf('-partial.html') > -1;
            return (isPartial)? '/partials/' + suffixedPath : suffixedPath + 'partial.html';
          }
        })
        .otherwise('/');
  });
