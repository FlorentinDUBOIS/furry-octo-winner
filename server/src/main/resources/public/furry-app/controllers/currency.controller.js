(function () {
  angular
    .module('furryApp')
    .controller('currencyCtrl', currencyCtrl)

  function currencyCtrl($scope, $Prices, $log, CurrenciesSymbol) {
    $scope.CurrenciesSymbol = CurrenciesSymbol;

    $Prices.availableCurrencies()
        .then((currencies) => {
            $scope.currencies = currencies;

            $log.info($Prices.getUserCurrency())

            $scope.userCurrency = $Prices.getUserCurrency();
            $scope.updateCurrency = function() {
                $Prices.setUserCurrency($scope.userCurrency);
            }
        });

    $scope.setUserCurrency = function (currency) {
        $Prices.setUserCurrency(currency);
        $scope.userCurrency = $Prices.getUserCurrency();
        $log.debug($Prices.getUserCurrency());
    };
  }

  currencyCtrl.$inject = ['$scope', '$Prices', '$log', 'CurrenciesSymbol']
} ())
