furryApp
.component('articlesComponent', {

  bindings: { 
    articles: '<' 
  },

  templateUrl: 'furry-app/templates/articles.html',
           
  controller: function($scope, $state, $Cart, $log) {
      $scope.$watch('$ctrl.articles', (oValue, nValue) => {
        this.articles = nValue;
      });
      $log.info('Actual Cart :', $Cart.resumeCart());

      $scope.showArticle = (articleId) => {
        console.log(`[state] go to article ${articleId}`);
        $state.go('articleDetails', {
          articleId
        });
      }

      $scope.addToCart = (articleId) => {
        $Cart.addArticle(articleId);
      };
      $scope.removeFromCart = (articleId) => {
        $Cart.removeArticle(articleId);
      }
  }
});