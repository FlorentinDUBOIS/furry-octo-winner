furryApp
.component('articlesComponent', {

  bindings: { 
    articles: '<' 
  },

  templateUrl: 'furry-app/templates/articles.html',
           
  controller: function($scope, $state, $Cart) {
      $scope.$watch('$ctrl.articles', (oValue, nValue) => {
        this.articles = nValue;
      });
      console.log('Actual Cart :', $Cart.resumeCart());

      $scope.showArticle = (articleId) => {
        console.log(`[state] go to article ${articleId}`);
        $state.go('articleDetails', {
          articleId
        });
      }

      $scope.addToCart = (articleId) => {
        return $Cart.addArticle(articleId);
      };
      $scope.removeFromCart = (articleId) => {
        return $Cart.removeArticle(articleId);
      }
  }
});