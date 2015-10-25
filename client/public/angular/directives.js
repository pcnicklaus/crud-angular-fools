angular.module('displayDirective', [])

.directive('displayFools', function () {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/display-fools.html'
    }

});