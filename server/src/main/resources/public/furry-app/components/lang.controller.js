furryApp.controller("langCtrl", function ($scope, $translate, $Prices) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
        console.log('Change Language', key);
    };

    $Prices.availableCurrencies()
        .then((currencies) => {
            $scope.currencies = currencies;
            console.log($Prices.getUserCurrency())
            $scope.userCurrency = $Prices.getUserCurrency();

            $scope.updateCurrency = () => {
                $Prices.setUserCurrency($scope.userCurrency);
            }

            $scope.$apply();
        });

    $scope.languages = $translate.getAvailableLanguageKeys();
}

);
