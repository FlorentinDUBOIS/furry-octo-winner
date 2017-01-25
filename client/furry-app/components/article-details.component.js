furryApp
.component('articleDetailsComponent', {

  bindings: { 
    articles: '<' 
  },

  templateUrl: 'furry-app/templates/article-details.html',
           
  controller: function($scope, $state) {
      $scope.$watch('$ctrl.articles', (oValue, nValue) => {
        this.articles = nValue;
      });

      $scope.showArticle = (articleId) => {
        console.log(`[state] go to article ${articleId}`);
        $state.go('articleDetails', {
          articleId
        });
      }
  }
});