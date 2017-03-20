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

      link(scope, elem, attrs) {
        function calcul() {
          let cur = $Prices.getUserCurrency()

          $Prices
            .convertFast(scope.amount)
            .then(function() { scope.finalPrice = newPrice })
            .catch($log.error)

          scope.unit = currenciesSymbols[cur] || cur
        }

        scope.$on('currencyChange', function() {
          $log.debug('Receive event currencyChange')

          calcul()
        })
      }
    }
  }

  price.$inject = ['$Prices', '$log', 'CurrenciesSymbol']
} ())
