(function () {
  angular
    .module('furryApp')
    .component('specialOfferComponent', {
      templateUrl: 'furry-app/templates/special-offer.html',
      bindings: {
        articles: '<'
      }
    })
} ())
