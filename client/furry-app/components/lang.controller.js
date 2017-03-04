furryApp.controller("langCtrl", function ($scope, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
            console.log('Change Language',key);
        };
    }
);
