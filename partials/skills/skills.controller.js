app.controller('SkillsCtrl', function () {
	var vm = this;
	vm.skills = [];
	var dotNet = {
		name: '.Net',
		image: 'images/skills/net.jpg',
		experience: 'Advanced'
	};
	var csharp = {
		name: 'C#',
		image: 'images/skills/csharp.jpg',
		experience: 'Advanced'
	};
	var java = {
		name: 'Java',
		image: 'images/skills/java.jpg',
		experience: 'Educational'
	};
	var angular = {
		name: 'AngularJs',
		image: 'images/skills/angularjs.jpg',
		experience: 'Advanced'
	};
	var html = {
		name: 'Html',
		image: 'images/skills/HTML5.jpg',
		experience: 'Advanced'
	};

	var git = {
		name: 'Git',
		image: 'images/skills/git.jpg',
		experience: 'Advanced'
	};
	var rubyonrails = {
		name: 'Ruby on Rails',
		image: 'images/skills/rubyonrails.jpg',
		experience: 'Educational'
	};
	var node = {
		name: 'NodeJs',
		image: 'images/skills/node.jpg',
		experience: 'Intermediate'
	};
	var itextsharp = {
		name: 'iTextSharp',
		image: 'images/skills/itextsharp.jpg',
		experience: 'Intermediate'
	};
	var nhibernate = {
		name: 'NHibernate',
		image: 'images/skills/nhibernate.jpg',
		experience: 'Intermediate'
	};
	var webservice = {
		name: 'WCF WebServices',
		image: 'images/skills/webservice.jpg',
		experience: 'Intermediate'
	};
	var sql = {
		name: 'SQL DataBases',
		image: 'images/skills/sql.jpg',
		experience: 'Advanced'
	};
	var mongodb = {
		name: 'Mongo DataBases',
		image: 'images/skills/mongodb.jpg',
		experience: 'Beginner'
	};
	var azure = {
		name: 'Microsoft Azure Cloud Hosting',
		image: 'images/skills/azure.jpg',
		experience: 'Beginner'
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
	vm.skills.push(sql);
	vm.skills.push(mongodb);
	vm.skills.push(azure);
});