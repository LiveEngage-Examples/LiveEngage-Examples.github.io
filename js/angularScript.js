// create the module
// also include ngRoute for all our routing needs
var leApp = angular.module('leApp', ['ngRoute']);

// configure our routes
leApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/all.html',
            controller  : 'mainController'
        })
        .when('/ehapi', {
            templateUrl : 'pages/ehapi.html',
            controller  : 'ehapiController'
        })
        .when('/rtapi', {
            templateUrl : 'pages/rtapi.html',
            controller  : 'rtapiController'
        })
        .when('/adminapi', {
            templateUrl : 'pages/adminapi.html',
            controller  : 'adminapiController'
        });
});

// create the controller and inject Angular's $scope
leApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

// create the controller and inject Angular's $scope
leApp.controller('ehapiController', function($scope) {
    // create a message to display in our view
    $scope.message = '123';
});

// create the controller and inject Angular's $scope
leApp.controller('rtapiController', function($scope) {
    // create a message to display in our view
    $scope.message = '123123';
});

// create the controller and inject Angular's $scope
leApp.controller('adminapiController', function($scope) {
    // create a message to display in our view
    $scope.message = '123asdf';
});