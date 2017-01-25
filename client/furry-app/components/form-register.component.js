furryApp
.component('registerFormComponent', {

  bindings: {},

  templateUrl: 'furry-app/templates/form-register.html',
           
  controller: function($scope, $state, $User) {

    $scope.register = () => {
      console.log($scope.user);
      //$User.login()
    }
  }
});