(function () {
  angular
    .module('furryApp')
    .component('registerFormComponent', {
      templateUrl: 'furry-app/templates/form-register.html',
      controller: registerFormComponent
    })

    function registerFormComponent($scope, $state, $User, $log) {
      $scope.register = function() {
        $log.info($scope.user);
        $User.register($scope.user);
      }
    }

    registerFormComponent.$inject = ['$scope', '$state', '$User', '$log']
} ())
