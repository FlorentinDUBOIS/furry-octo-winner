furryApp
.component('productsComponent', {

  bindings: { products: '<' },

  //template:  '<h1>{{$ctrl.user}}</h1>',
  templateUrl: 'furry-app/templates/products.html',
           
  controller: function($scope) {
      $scope.$watch('$ctrl.products', (a, b) => {
        this.products = b;
      });
  }
});