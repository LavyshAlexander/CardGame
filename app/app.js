'use strict';

var app = angular.module('CardGameApp', [
    'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'GameCtrl',
        templateUrl: 'game/game.html'
    })
    .otherwise({redirectTo: '/'});
}]);
