(function () {

    var app = angular.module("gymApp", []);

    var MainController = function ($scope) {
        $scope.message = "Helooow";
    }

    app.controller("MainController", MainController)
}());