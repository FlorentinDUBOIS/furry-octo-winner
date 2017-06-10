(function () {
  angular
    .module('furryApp')
    .component('myAccountComponent', {
      templateUrl: 'furry-app/templates/my-account.html',
      controller: function($scope, $User) {

        $User.getInformations().then((user) => {
          $scope.me = user
          $User
          .getGravatarProfil(user.email)
          .then((profil) => {
            $scope.profil = profil
          })
        })
      }
    })
} ())
