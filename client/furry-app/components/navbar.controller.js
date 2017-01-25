furryApp.controller("navbarCtrl",function($scope,$state,$User){
    //$scope.account="yolo";
    if ($User.isLoggedIn())
        $scope.account="navbarMyAccount";
    else $scope.account='navbarLogin';

    $scope.accountLink=function(){
        if ($User.isLoggedIn()){
            $state.go("myAccount");
        }
        else {
            $state.go("loginForm");
        }
    };
});

