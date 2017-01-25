furryApp.controller("langCtrl", function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
    }
);