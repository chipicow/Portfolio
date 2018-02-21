app.controller('ExperienceCtrl', function () {
	var vm = this;
	vm.projects = [];
	var device = {
		name:'Device Cordinator',
		points : ['dirver','blabla'] 
	};
	var device1 = {
		name:'Device Cordinatordd',
		points : ['dirver','blabla'] 
	};
	vm.projects.push(device); 
	vm.projects.push(device1); 
});