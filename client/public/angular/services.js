angular.module('myApp')

.factory('myFactory', ['$http', function ($http) {
    var factory = {};

    factory.postFool = function (fool) {
        return $http.post('/fool/' + fool.name + '/' + fool.age);

    };

    factory.getFools = function () {
        return $http.get('/fools');
    };
    return factory;

}]);