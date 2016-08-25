'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('MainCtrl', function($scope, $firebaseArray) {
    var ref = new Firebase("https://inmotionmovies.firebaseio.com/movies");
    //bind firebase data to app scope so we can use it on the dom.
    $scope.movies = $firebaseArray(ref);

  });
