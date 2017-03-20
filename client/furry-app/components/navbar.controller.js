furryApp.controller("navbarCtrl",function($scope,$state,$User, $Cart, $Prices){
  if ($User.isLoggedIn())
    $scope.account="navbarMyAccount";
  else $scope.account='navbarLogin';

  $scope.cartService = $Cart;

  $scope.accountLink = function() {
    if ($User.isLoggedIn()){
      $state.go("myAccount");
    }
    else {
      $state.go("loginForm");
    }
  };

  $Prices.availableCurrencies()
  .then((currencies) => {
    $scope.currencies = currencies;
    console.log($Prices.getUserCurrency())
    $scope.userCurrency = $Prices.getUserCurrency();

    $scope.updateCurrency = () => {
      $Prices.setUserCurrency($scope.userCurrency);
    }

    $scope.$apply();
  });
});

