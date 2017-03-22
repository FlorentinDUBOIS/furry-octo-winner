(function () {
  angular
    .module('furryApp')
    .component('orderCartComponent', {
      templateUrl: 'furry-app/templates/order-cart.html',
      controller: orderCartComponent
    })

    function orderCartComponent($scope, $state, $Cart) {
      refreshCart();

      $scope.plus = function(articleId) {
        $Cart.addArticle(articleId);
        refreshCart();
      }

      $scope.moins = function(articleId) {
        $Cart.removeArticle(articleId);
        refreshCart();
      }

      $scope.cartClear = function() {
        $Cart.resetCart();
        refreshCart();
      }

      //////////////

      function refreshCart() {
        $scope.articles = Array.from($Cart.resumeCart());
      }
    }

    orderCartComponent.$inject = ['$scope', '$state', '$Cart']
} ())
