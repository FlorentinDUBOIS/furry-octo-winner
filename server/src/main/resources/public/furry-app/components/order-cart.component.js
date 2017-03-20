furryApp
.component('orderCartComponent', {

  templateUrl: 'furry-app/templates/order-cart.html',
           
  controller: function($scope, $state, $Cart) {

    let refreshCart = () => {
      $scope.articles = Array.from($Cart.resumeCart());
    }
    refreshCart();

    $scope.plus = (articleId) => {
      $Cart.addArticle(articleId);
      refreshCart();
    }
    $scope.moins = (articleId) => {
      $Cart.removeArticle(articleId);
      refreshCart();
    }
    $scope.cartClear = () => {
      $Cart.resetCart();
      refreshCart();
    }
  }
});