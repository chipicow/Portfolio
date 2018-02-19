app.controller('GamesCtrl', function(){
	var vm=this;
	vm.gameList = [];
	var game = {
		link : 'https://peixebalao.azurewebsites.net/public/index.html',
		name : 'Ballon Fish',
		description : 'Avoid the spikes and the squares, the more you hit the harder the game gets, try out and beat my best score'
	};
	vm.gameList.push(game);
});