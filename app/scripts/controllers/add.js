'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('AddCtrl', function($scope, $location, $firebaseArray) {
    var ref = new Firebase("https://inmotionmovies.firebaseio.com/movies");
    //bind firebase data to app scope so we can use it on the dom.
    $scope.movies = $firebaseArray(ref);
    // $scope.actors = $scope.movies.actors
    $scope.addMovie = function() {


      $scope.movies.$add({
        title: $scope.movie.title,
        genre: $scope.movie.genre,
        actors: $scope.movie.actors,
        year: $scope.movie.year,
        rating: $scope.movie.rating
      });

      $location.path('/');
    };

  });
