angular.module('myApp')
.controller('MyController', function($scope, myFactory) {
    myFactory.getDucks()
    .then(function(response) {
        $scope.ducks=response.data;
    })
    $scope.duck = {
        name: ' ',
        age: 0
    };
    $scope.postDuck = function () {
        myFactory.postDuck($scope.duck)
        .then(function(response){
            // this callback will be called asynchronously
            // when the respons is available
            console.log('SUCCESS', response);
            $scope.ducks.push($scope.duck);
            $scope.duck = {
                name: ' ',
                age: 0
            };
        },  function(response) {
            //
            console.log('FAIL', response);
        });
    };

    $scope.getDucks = function() {
        myFactory.getDucks()
        .then(function(response) {
            console.log('SUCCESS GET', response);
        }, function(response) {
            console.log('FAIL GET', response);
        });
    }
});