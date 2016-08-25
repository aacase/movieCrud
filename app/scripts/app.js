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
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
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
