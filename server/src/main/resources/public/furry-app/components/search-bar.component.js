angular.module('furryApp')
.component('appSearchBar', {

  bindings: {},

  templateUrl: 'furry-app/templates/search-bar.html',

  controller: function($scope, $state, $Article) {

      // Get all articles
      $Article.query().$promise.then((articles) => {
        $scope.articles = articles
      })

      // Match search text and articles
      $scope.getMatches = (searchText) => {
        if (!searchText || searchText === '') {
          return $scope.articles
        }

        let matches = [];
        for(let article of $scope.articles) {
          if (article.nom.toLowerCase().includes(searchText.toLowerCase())) {
            matches.push(article)
          }
        }
        return matches
      }

      // Go to the article page
      $scope.go = (article) => {
        if(article && article.id) {
          $state.go('articleDetails', {
            articleId: article.id
          })
        }
      }
  }
});