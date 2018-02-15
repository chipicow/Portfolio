/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/skills", {templateUrl: "partials/skills.html", controller: "PageCtrl"})
    .when("/contacts", {templateUrl: "partials/contacts.html", controller: "PageCtrl"})
    .when("/hobbies", {templateUrl: "partials/hobbies.html", controller: "PageCtrl"})
    // Games
    .when("/games", {templateUrl: "partials/games/games.html", controller: "GameCtrl"})
    .when("/games/trexgame", {templateUrl: "partials/games/trexgame/trexgame.html", controller: "GameCtrl"})
    // else 404
    .otherwise({redirectTo: '/home'});
}]);

/**
 * Controls the Blog
 */
app.controller('GameCtrl', function (/* $scope, $location, $http */) {
  console.log("Game Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});