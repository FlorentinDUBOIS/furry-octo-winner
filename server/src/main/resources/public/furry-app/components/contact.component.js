(function() {
  angular
    .module('furryApp')
    .component('contactComponent', {
      templateUrl: 'furry-app/templates/contact.html',
      controller: contactComponent
    })

    function contactComponent($scope, $mdToast, $translate, $log) {
      $scope.$contact = {}
      $scope.send = function($event) {
        if (!$event.defaultPrevented) {
          $event.preventDefault()
        }

        $log.info('Sent message', $scope.$contact)
        $scope.$contact = {}

        $translate('contact.sent').then(function(sent) {
          $mdToast.show(
            $mdToast
              .simple()
              .textContent(sent)
          )
        })

        return false
      }
    }

    contactComponent.$inject = ['$scope', '$mdToast', '$translate', '$log']
} ())
