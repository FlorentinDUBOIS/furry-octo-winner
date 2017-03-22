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

    $scope.range = function (num) {
      return new Array(num);
    }

    $scope.addToCart = function (articleId, size) {
      size = parseInt(size);
      if (!size) size = 1;
      $Cart.addArticle(articleId, size);
    }

    $scope.removeFromCart = function (articleId) {
      $Cart.removeArticle(articleId);
    }
  }

  articlesComponent.$inject = ['$scope', '$state', '$Cart', '$log']
}())
