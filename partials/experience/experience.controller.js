app.controller('ExperienceCtrl', function () {
	var vm = this;
	vm.projects = [];
	var device = {
		name:'Device Cordinator',
		points : ['BackEnd Development for a web application in the pharmacy market','Web Socket usage for an asynchronous and bidirecional communication',
		'Tcp-Ip protocol communication to trigger events with pharmacy hardware','C# wrappers from c++ and delphi dlls','Duration 3 months'] 
	};
	var device1 = {
		name:'Estimation Tool',
		points : ['Web Application to calculate future IT Consulting projects cost in human hours','Built a SQL DataBase in SqlServer2014 Management Studio ',
		'Entity Framework ORM','Developed Web Api in ASP.NET','Used Angular JS Framework for a single page application',
		'Duration 2-3 months'] 
	};
	var mercedes ={
		name:'Mercedes WebService',
		points :['WebService development for pdf invoice generator','WCF WebService experience','iTextSharp library experience with one of the authors','Duration 3 weeks']
	}
	vm.projects.push(device); 
	vm.projects.push(device1); 
	vm.projects.push(mercedes); 
});