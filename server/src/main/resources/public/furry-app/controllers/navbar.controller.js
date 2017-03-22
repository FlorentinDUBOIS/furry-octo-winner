(function() {
  angular
    .module('furryApp')
    .controller('navbarCtrl', navbarCtrl)

  function navbarCtrl($scope, $state, $User, $Cart) {
    $scope.cartService = $Cart;

    if ($User.isLoggedIn()) {
      $scope.account="navbarMyAccount"
    } else {
      $scope.account='navbarLogin'
    }

    $scope.accountLink = function() {
      if ($User.isLoggedIn()){
        $state.go("myAccount")
      } else {
        $state.go("loginForm")
      }
    }
  }

  navbarCtrl.$inject = ['$scope', '$scope', '$User', '$Cart']
} ())
