'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('MainCtrl', function($scope, $firebaseArray, $firebaseObject) {
    var ref = new Firebase("https://inmotionmovies.firebaseio.com/movies");
    //bind firebase data to app scope so we can use it on the dom.
    $scope.movies = $firebaseArray(ref);

    //delete a movie from the collection. Personally I would never do this
    $scope.removeMovie = function(id) {
      var ref2 = new Firebase("https://inmotionmovies.firebaseio.com/movies/" + id);
      var movie = $firebaseObject(ref2)
      movie.$remove();
    };
  });
