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
  .directive('loadJs', function() {
      return {
        restrict: 'A',
        link: function(scope, iEl, iAttrs) {
          console.info(iAttrs);
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = iAttrs.loadJs;
            script.async = false;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
      }
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
          pre: preLink,
          post: function() {}
        }
        
        function preLink(scope, element) {
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
