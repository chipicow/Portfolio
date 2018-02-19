var app=angular.module("webApp",["ngRoute"]);app.config(["$routeProvider",function(l){l.when("/",{templateUrl:"partials/home/home.html",controller:"HomeCtrl"}).when("/skills",{templateUrl:"partials/skills/skills.html",controller:"SkillsCtrl"}).when("/contacts",{templateUrl:"partials/contacts/contacts.html",controller:"ContactsCtrl"}).when("/hobbies",{templateUrl:"partials/hobbies/hobbies.html",controller:"HobbiesCtrl"}).when("/games",{templateUrl:"partials/games/games.html",controller:"GameCtrl"}).when("/games/trexgame",{templateUrl:"partials/games/trexGame/trexgame.html",controller:"TRexCtrl"}).otherwise({redirectTo:"/"})}]),app.controller("GameCtrl",function(){console.log("Game Controller reporting for duty.")}),app.controller("HomeCtrl",function(){console.log("Home Controller reporting for duty.")}),app.controller("SkillsCtrl",function(){console.log("Skills Controller reporting for duty.")}),app.controller("ContactsCtrl",function(){console.log("Contacts  Controller reporting for duty.")}),app.controller("HobbiesCtrl",function(){console.log("Hobbies Controller reporting for duty.")});
app.controller("TRexCtrl",function(){});