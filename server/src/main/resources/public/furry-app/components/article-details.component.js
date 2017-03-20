furryApp
.component('articleDetailsComponent', {

  bindings: { 
    article: '<' 
  },

  templateUrl: 'furry-app/templates/article-details.html',
           
  controller: function($scope, $state) {
    $scope.$watch('$ctrl.article', (oValue, nValue) => {
      this.article = nValue;
    });
  }
});