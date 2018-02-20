app.controller('SkillsCtrl', function () {
	var vm = this;
	vm.skills = [];
	var dotNet = {
		name: '.Net',
		image: 'images/skills/net.jpg',
		experience: 'Professional'
	};
	var java = {
		name: 'Java',
		image: 'images/skills/java.jpg',
		experience: 'Educational'
	};
	vm.skills.push(dotNet);
	vm.skills.push(java);
});