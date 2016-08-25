'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')

// We're using the $firebaseObject module here because we're only dealing with the object within the array

.controller('EditCtrl', ['$scope', '$location', '$routeParams', '$firebaseObject',
  function($scope, $location, $routeParams, $firebaseObject) {

    var id = $routeParams.id;

    var ref = new Firebase("https://inmotionmovies.firebaseio.com/movies/" + id);

    $scope.movie = $firebaseObject(ref);

    $scope.editMovie = function() {
      $scope.movie.$save({
        title: $scope.movie.title,
        genre: $scope.movie.genre,
        actors: $scope.movie.actors,
        year: $scope.movie.year,
        rating: $scope.movie.rating
      });
      $scope.edit_form.$setPristine();
      $scope.movie = {};
      $location.path('/');
    };

  }
]);
