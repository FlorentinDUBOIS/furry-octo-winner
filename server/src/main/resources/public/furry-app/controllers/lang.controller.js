(function() {
  angular
    .module('furryApp')
    .controller('langCtrl', langCtrl)

  function langCtrl($scope, $translate, $log) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
        $log.info('Change Language', key);
    };

    $scope.languages = $translate.getAvailableLanguageKeys();
  }

  langCtrl.$inject = ['$scope', '$translate', '$log']
} ())
