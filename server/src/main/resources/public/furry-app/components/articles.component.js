(function () {
  angular
    .module('furryApp')
    .component('articlesComponent', {
      templateUrl: 'furry-app/templates/articles.html',
      bindings: {
        articles: '<'
      },

      controller: articlesComponent
    })

  function articlesComponent($scope, $state, $Cart, $log) {
    $scope.$watch('$ctrl.articles', (oValue, nValue) => {
      this.articles = nValue;
    });

    $log.info('Actual Cart :', $Cart.resumeCart());
    $scope.showArticle = (articleId) => {
      $log.info(`[state] go to article ${articleId}`);

      $state.go('articleDetails', {
        articleId
      });
    }

    $scope.addToCart = function (articleId) {
      $Cart.addArticle(articleId);
    }

    $scope.removeFromCart = function (articleId) {
      $Cart.removeArticle(articleId);
    }
  }

  articlesComponent.$inject = ['$scope', '$state', '$Cart', '$log']
} ())
