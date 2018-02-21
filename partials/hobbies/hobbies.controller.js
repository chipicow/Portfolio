app.controller('HobbiesCtrl', function () {
	var vm = this;
	vm.hobbies = [];
	var cycling = {
		name: 'Cycling',
		pictures:[]
	};
	var bananaBreak = {
		image:'images/cycling/bananaBreak.jpg',
		description: 'Bananinha'
	};
	var subir = {
		image:'images/cycling/boss.jpg',
		description: 'Subir'
	};
	cycling.pictures.push(bananaBreak);
	cycling.pictures.push(subir);
	vm.hobbies.push(cycling);
	console.log(vm.hobbies);
});