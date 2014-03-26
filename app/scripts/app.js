'use strict';

var bratsApp = angular.module('bratsApp', [
	'ngRoute',
	'reviewsController'
]);

bratsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/partials/reviews.html',
        controller: 'MainCtrl'
      }).
      when('/Review/:reviewid',{
        templateUrl: 'views/partials/review.html',
        controller: 'ReviewCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);