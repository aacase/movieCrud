'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('MainCtrl', function ($scope, $firebaseObject) {
    var ref = new Firebase("https://inmotionmovies.firebaseio.com/");
    $scope.data = $firebaseObject(ref);
    console.log($scope.data)

  });
