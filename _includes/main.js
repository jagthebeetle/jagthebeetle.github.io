angular.module('jag',['ngRoute','ngAnimate'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      'enabled': true
    });
    $routeProvider
      .when('/:post*', {
        templateUrl: function(path) {
          var suffixedPath = path.post.replace(/\.html$/, '-partial.html');
          var isPartial = suffixedPath.indexOf('-partial.html') > -1;
          return (isPartial) ? 
            '/partials/' + suffixedPath :
            suffixedPath + 'partial.html';
        }
      });
  })
  .directive('routeExtend', function($document) {
    return {
      restrict: 'A',
      priority: 401,
      compile: function(tElement) {

        if (!tElement.text().length) {
          tElement.parent().addClass('anim-active');
        }
        return {
          preLink: function() {},
          postLink: postLink
        }
        function postLink(scope, element) {
          var onceToken;

          scope.$on('$routeChangeSuccess', updateDom);

          function updateDom($event, newRoute) {
            var template = newRoute && newRoute.locals && newRoute.locals.$template;
            var title = getTitleFromTemplate(template);
            if (title) {
              $document[0].title = title + ' | ' + '{{ site.title }}';
            } else {
              $document[0].title = '{{ site.title }}';
            }

            onceToken = onceToken || Number.isInteger(
              setTimeout(function() {
                element.parent().addClass('anim-active');
              }, 0)
            );
          }

          function getTitleFromTemplate(str) {
            if (str && str.match) {
              var match = str.match(/<h1.*?>(.*?)<\/h1>/i);
              if (match) {
                return match[1];
              }
            }
          }
        }
      }
    };
  });
