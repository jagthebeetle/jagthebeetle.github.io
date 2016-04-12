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
            console.info(suffixedPath);
            return '/partials/' + suffixedPath;
          }
        })
        .otherwise('/');
  })
  .controller('blog', BlogController);

function BlogController() {};
