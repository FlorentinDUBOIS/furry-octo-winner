(function () {
  angular
    .module('furryApp')
    .component('loginFormComponent', {
      templateUrl: 'furry-app/templates/form-login.html',
      controller: loginFormComponent
    })

    function loginFormComponent($scope, $state, $User, $log) {
      $scope.logIn = function() {
        $log.info($scope.user);
        $User
          .tryLogin($scope.user)
          .catch($log.error)
          .then(() => $User.getInformations())
          .then(function(user) {
            $log.info(user)
            $state.go('articleList')
          })
      }
    }

    loginFormComponent.$inject = ['$scope', '$state', '$User', '$log']
} ())
