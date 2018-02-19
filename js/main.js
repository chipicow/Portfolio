
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
    .when("/", {templateUrl: "partials/home/home.html", controller: "HomeCtrl"})
    .when("/skills", {templateUrl: "partials/skills/skills.html", controller: "SkillsCtrl"})
    .when("/contacts", {templateUrl: "partials/contacts/contacts.html", controller: "ContactsCtrl"})
    .when("/hobbies", {templateUrl: "partials/hobbies/hobbies.html", controller: "HobbiesCtrl"})
    .when("/games", {templateUrl: "partials/games/games.html", controller: "GameCtrl"})
    .when("/games/trexgame", {templateUrl: "partials/games/trexGame/trexgame.html", controller: "TRexCtrl"})
    // else redirect to home
    .otherwise({redirectTo: '/'});
}]);
