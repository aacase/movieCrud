'use strict';

/**
 * @ngdoc overview
 * @name inMotionApp
 * @description
 * # inMotionApp
 *
 * Main module of the application.
 */
angular
  .module('inMotionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
        controllerAs: 'about'
      })
      .when('/edit/:id', {
        controller: 'EditController',
        templateUrl: 'views/edit.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
