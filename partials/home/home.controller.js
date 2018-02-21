app.controller('HomeCtrl', function () {
	var vm = this;
	vm.passions = [];
	var Coding = {
		name : 'Writing Code',
		percentage : '80%',
		value: '80'
	};
	var Coffee = {
		name : 'Drinking Coffee',
		percentage : '90%',
		value: '90'
	};
	var Skills = {
		name : 'Learning new Skills',
		percentage : '75%',
		value: '75'
	};
	var Cycling = {
		name : 'Cycling',
		percentage : '85%',
		value: '85'
	};
	vm.passions.push(Coding);
	vm.passions.push(Coffee);
	vm.passions.push(Skills);
	vm.passions.push(Cycling);
});