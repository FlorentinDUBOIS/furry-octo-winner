furryApp.controller("currencyCtrl", function ($scope, $Prices, $log, CurrenciesSymbol) {
    $scope.CurrenciesSymbol = CurrenciesSymbol;

    $Prices.availableCurrencies()
        .then((currencies) => {
            $scope.currencies = currencies;
            console.log($Prices.getUserCurrency())
            $scope.userCurrency = $Prices.getUserCurrency();

            $scope.updateCurrency = () => {
                $Prices.setUserCurrency($scope.userCurrency);
            }
        });

    $scope.setUserCurrency = function (currency) {
        $Prices.setUserCurrency(currency);
        $scope.userCurrency = $Prices.getUserCurrency();
        $log.debug($Prices.getUserCurrency());
    };

}

);
