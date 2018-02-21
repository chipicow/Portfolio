app.controller('SkillsCtrl', function () {
	var vm = this;
	vm.skills = [];
	var dotNet = {
		name: '.Net',
		image: 'images/skills/net.jpg',
		experience: 'Professional'
	};
	var csharp = {
		name: 'C#',
		image: 'images/skills/csharp.jpg',
		experience: 'Professional'
	};
	var java = {
		name: 'Java',
		image: 'images/skills/java.jpg',
		experience: 'Educational'
	};
	var angular = {
		name: 'AngularJs',
		image: 'images/skills/angularjs.jpg',
		experience: 'Professional'
	};
	var html = {
		name: 'Html',
		image: 'images/skills/HTML5.jpg',
		experience: 'Professional'
	};

	var git = {
		name: 'Git',
		image: 'images/skills/git.jpg',
		experience: 'Professional'
	};
	var rubyonrails = {
		name: 'Ruby on Rails',
		image: 'images/skills/rubyonrails.jpg',
		experience: 'Educational'
	};

	var node = {
		name: 'NodeJs',
		image: 'images/skills/node.jpg',
		experience: 'Professional'
	};
	var itextsharp = {
		name: 'iTextSharp',
		image: 'images/skills/itextsharp.jpg',
		experience: 'Professional'
	};
	var nhibernate = {
		name: 'NHibernate',
		image: 'images/skills/nhibernate.jpg',
		experience: 'Professional'
	};
	var webservice = {
		name: 'WCF WebServices',
		image: 'images/skills/webservice.jpg',
		experience: 'Professional'
	};
	vm.skills.push(dotNet);
	vm.skills.push(java);
	vm.skills.push(angular);
	vm.skills.push(html);
	vm.skills.push(git);
	vm.skills.push(node);
	vm.skills.push(rubyonrails);
	vm.skills.push(itextsharp);
	vm.skills.push(csharp);
	vm.skills.push(nhibernate);
	vm.skills.push(webservice);
});