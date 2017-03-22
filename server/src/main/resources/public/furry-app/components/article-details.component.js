(function() {
  angular
    .module('furryApp')
    .component('articleDetailsComponent', {
      templateUrl: 'furry-app/templates/article-details.html',
      bindings: {
        article: '<'
      },

      controller: articleDetailsComponent
    })

  function articleDetailsComponent($scope, $state) {
    $scope.$watch('$ctrl.article', (oValue, nValue) => {
      this.article = nValue;
    });
  }

  articleDetailsComponent.$inject = ['$scope', '$state']
} ())
