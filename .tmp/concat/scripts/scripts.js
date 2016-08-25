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
  .config(["$routeProvider", function($routeProvider) {
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
        controller: 'EditCtrl',
        templateUrl: 'views/edit.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('MainCtrl', ["$scope", "$firebaseArray", "$firebaseObject", function($scope, $firebaseArray, $firebaseObject) {
    var ref = new Firebase("https://inmotionmovies.firebaseio.com/movies");
    //bind firebase data to app scope so we can use it on the dom.
    $scope.movies = $firebaseArray(ref);
    // $scope.actors = $scope.movies.actors

  //delete a movie from the collection. Personally I would never do this
   $scope.removeMovie = function(id) {

    var ref2 = new Firebase("https://inmotionmovies.firebaseio.com/movies/"+id);
    var movie = $firebaseObject(ref2)
    movie.$remove();
   };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name inMotionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inMotionApp
 */
angular.module('inMotionApp')
  .controller('AddCtrl', ["$scope", "$location", "$firebaseArray", function($scope, $location, $firebaseArray) {
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

  }]);

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

angular.module('inMotionApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/add.html',
    "<h1>Add New Movie</h1> <form class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <label for=\"Title\" class=\"col-sm-2 control-label\">Title</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"title\" ng-model=\"movie.title\" placeholder=\"Title\"> </div> </div> <div class=\"form-group\"> <label for=\"genre\" class=\"col-sm-2 control-label\">Genre</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"genre\" ng-model=\"movie.genre\" placeholder=\"Genre\"> </div> </div> <div class=\"form-group\"> <label for=\"Actors\" class=\"col-sm-2 control-label\">Actors:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"actors\" ng-model=\"movie.actors\" placeholder=\"Actors\"> </div> </div> <div class=\"form-group\"> <label for=\"Year\" class=\"col-sm-2 control-label\">Year:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"year\" type=\"number\" ng-model=\"movie.year\" placeholder=\"Year made\"> </div> </div> <div class=\"form-group\"> <label for=\"Rating\" class=\"col-sm-2 control-label\">Rating:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"rating\" type=\"number\" ng-model=\"movie.rating\" placeholder=\"Rating out of 5\"> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-offset-2 col-sm-10\"> <a ng-click=\"addMovie()\" class=\"btn btn-small btn-primary\">Add</a> </div> </div> </form>"
  );


  $templateCache.put('views/edit.html',
    "<h1>Edit Movie</h1> <form name=\"edit_form\" class=\"form-horizontal\" role=\"form\"> <div class=\"form-group\"> <label for=\"Title\" class=\"col-sm-2 control-label\">Title</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"title\" ng-model=\"movie.title\" placeholder=\"Title\"> </div> </div> <div class=\"form-group\"> <label for=\"genre\" class=\"col-sm-2 control-label\">Genre</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"genre\" ng-model=\"movie.genre\" placeholder=\"Genre\"> </div> </div> <div class=\"form-group\"> <label for=\"Actors\" class=\"col-sm-2 control-label\">Actors:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"actors\" ng-model=\"movie.actors\" placeholder=\"Actors\"> </div> </div> <div class=\"form-group\"> <label for=\"Year\" class=\"col-sm-2 control-label\">Year:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"year\" type=\"number\" ng-model=\"movie.year\" placeholder=\"Year made\"> </div> </div> <div class=\"form-group\"> <label for=\"Rating\" class=\"col-sm-2 control-label\">Rating:</label> <div class=\"col-sm-4\"> <input class=\"form-control\" id=\"rating\" type=\"number\" ng-model=\"movie.rating\" placeholder=\"Rating out of 5\"> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-offset-2 col-sm-10\"> <a ng-click=\"editMovie()\" class=\"btn btn-small btn-primary\">Edit</a> </div> </div> </form>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"row\"> <table class=\"table\"> <caption class=\"lead\">My Movie Collection <div><label>Search for a movie <input ng-model=\"searchText\"></label></div> </caption> <thead> <tr> <th>Title</th> <th>Genre</th> <th>Actors</th> <th>Year Made</th> <th>Rating</th> </tr> </thead> <tbody> <tr ng-repeat=\"movie in movies | filter:searchText\"> <td>{{movie.title}}</td> <td>{{movie.genre}}</td> <td>{{movie.actors}}</td> <td>{{movie.year}}</td> <td>{{movie.rating}}</td> <td><a href=\"#/edit/{{movie.$id}}\" class=\"btn btn-small btn-primary\">Edit</a></td> <td><a class=\"btn btn-small btn-danger\" ng-click=\"removeMovie(movie.$id)\">Delete</a></td> </tr> </tbody> </table> <p> <a href=\"#/add\" class=\"btn btn-success\" role=\"button\">Add New Movie</a> </p> </div>"
  );

}]);
