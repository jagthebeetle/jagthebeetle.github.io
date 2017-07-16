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
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = iAttrs.loadJs;
        script.async = false;
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
  })
  .directive('routeExtend', function($document, $timeout) {
    return {
      restrict: 'A',
      priority: 401,
      compile: function(tElement) {
        // Check if the current ng-view is empty (as on the homepage). If so,
        // enable animations. Again, the landing page is the only page for which
        // we care to have animations disabled.
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

            // Animations are not enabled until the first route load. This
            // prevents a user from having their landing page animate in, which
            // is unnecessary. Subsequent route loads are allowed to animate, as
            // this improves the flow between pages. The $timeout ensures that
            // animations are activated after the DOM insertion has occurred.
            onceToken = onceToken || Number.isInteger(
              $timeout(function() {
                element.parent().addClass('anim-active');
              }, 0));
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
