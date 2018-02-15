(function () {
    'use strict';
    angular.module('webApp').controller('GameCtrl', birdController);
    birdController.$inject = [''];

function birdController() {
    var vm = this;
    vm.spaceFromFloor = 300;
	vm.y = height - vm.spaceFromFloor;
	vm.size = 50;
	vm.x = width+200;
	vm.speed = 15;
	vm.highlight = false;
	vm.hitting = false;

	vm.show = function(){
			fill(255);
			if(vm.highlight){
				fill(255,0,0);
			}
			rect(vm.x,vm.y,vm.size,vm.size);
		}
	vm.update = function(){
		vm.x -= vm.speed;
	}	
	
	vm.offScreen = function(){
		if(vm.x+vm.size <= 0){
			return true;
		}
		return false;
	}
	// compare between rectangle and circle
	vm.hits = function(rex) {
		vm.hitting = collideRectCircle(vm.x,vm.y,vm.size,vm.size,rex.x,rex.y,rex.size);
		if(vm.hitting){
			if(!vm.highlight){
				rex.size +=20;
				rex.lives -= 1;
			}
			vm.highlight = true;
			return true;
		}
		return false;
	}
    }
}());
		