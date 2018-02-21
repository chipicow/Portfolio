
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
 	.when("/", {templateUrl: "partials/home/home.html", controller: 'HomeCtrl',controllerAs:'vm'})
 	.when("/skills", {templateUrl: "partials/skills/skills.html", controller: 'SkillsCtrl',controllerAs:'vm'})
 	.when("/experience", {templateUrl: "partials/experience/experience.html", controller: 'ExperienceCtrl',controllerAs:'vm'})
 	.when("/hobbies", {templateUrl: "partials/hobbies/hobbies.html", controller: 'HobbiesCtrl',controllerAs:'vm'})
 	.when("/games", {templateUrl: "partials/games/games.html", controller: 'GamesCtrl',controllerAs:'vm'})
    // else redirect to home
    .otherwise({redirectTo: '/'});
}]);
