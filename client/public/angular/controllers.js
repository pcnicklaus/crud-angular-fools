angular.module('myApp')

.controller('MyController', function ($scope, myFactory) {
    myFactory.getFools()
        .then(function (response) {
            $scope.fools = response.data;
        })
    $scope.fool = {
        name: ' ',
        age: 0
    };

    $scope.postFool = function () {
        myFactory.postFool($scope.fool)
            .then(function (response) {
                //            console.log('SUCCESS', response);
                $scope.fools.push($scope.fool);
                $scope.fool = {
                    name: ' ',
                    age: 0
                };
            }, function (response) {
                console.log('FAIL', response);
            });
    };

    $scope.getFools = function () {
        myFactory.getFools()
            .then(function (response) {
                console.log('SUCCESS GET', response);
            }, function (response) {
                console.log('FAIL GET', response);
            });
    }
});