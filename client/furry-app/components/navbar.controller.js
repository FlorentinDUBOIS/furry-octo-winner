furryApp.controller("navbarCtrl",function($scope,$state,$User, $Cart){
    if ($User.isLoggedIn())
        $scope.account="navbarMyAccount";
    else $scope.account='navbarLogin';

    $scope.cartService = $Cart;

    $scope.accountLink=function(){
        if ($User.isLoggedIn()){
            $state.go("myAccount");
        }
        else {
            $state.go("loginForm");
        }
    };
});

