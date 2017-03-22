(function() {
  angular
    .module('furryApp')
    .directive('price', price)

  function price($Prices, $log, CurrenciesSymbol) {
    return {
      template: '{{ finalPrice | currency:\'\':2 }} {{ unit }}',
      scope: {
        amount: '='
      },

      link
    }

    function link($scope) {
      function calcul() {
        let cur = $Prices.getUserCurrency()

        $Prices
        .convertFast($scope.amount)
        .then((newPrice) => {
          $scope.finalPrice = newPrice
        })
        .catch($log.error)

        $scope.unit = CurrenciesSymbol[cur] || cur
      }
      calcul()

      $scope.$on('currencyChange', function() {
        $log.debug('Receive event currencyChange')
        calcul()
      })
    }

    link.$inject = ['$scope']
  }

  price.$inject = ['$Prices', '$log', 'CurrenciesSymbol']
} ())
