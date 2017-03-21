furryApp.controller("currencyCtrl", function ($scope, $Prices) {
    
    $Prices.availableCurrencies()
        .then((currencies) => {
            $scope.currencies = currencies;
            console.log($Prices.getUserCurrency())
            $scope.userCurrency = $Prices.getUserCurrency();

            $scope.updateCurrency = () => {
                $Prices.setUserCurrency($scope.userCurrency);
            }
        });

}

);
