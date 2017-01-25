furryApp
.component('loginFormComponent', {

  bindings: {},

  templateUrl: 'furry-app/templates/form-login.html',
           
  controller: function($scope, $state, $User) {

    $scope.logIn = () => {
      console.log($scope.user);
      $User.login()
    }
  }
});