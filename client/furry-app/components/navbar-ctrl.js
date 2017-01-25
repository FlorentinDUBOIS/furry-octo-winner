furryApp.controller("navbarCtrl",function($scope,$state,$User){
    $scope.account="yolo";
    $scope.accountLink=function(){
        if ($User.isLoggedIn())
            $state.go("myAccount")
        else $state.go("loginForm")
    };
});

