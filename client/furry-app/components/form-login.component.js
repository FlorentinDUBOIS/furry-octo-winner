furryApp
.component('loginFormComponent', {

  bindings: {},

  templateUrl: 'furry-app/templates/form-login.html',
           
  controller: function($scope, $state, $User) {

    $scope.logIn = () => {
      console.log($scope.user);
      $User.tryLogin($scope.user)
      .then(() => {
        $User.getInformations()
        .then((user) => {
          console.log(user);
          $state.go('articleList');
        })
        .catch((err) => {
          console.log(err);
        });
      });
    }
  }
});