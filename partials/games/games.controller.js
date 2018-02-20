app.controller('GamesCtrl', function(){
	var vm = this;
	vm.gameList = [];
	vm.CreateBallonGame = function(){
		var game = {
			link : 'https://peixebalao.azurewebsites.net/public/index.html',
			name : 'Ballon Fish',
			description : 'Avoid the spikes and the squares, the more you hit the harder the game gets, try out and beat my best score of 9999',
			image: 'images/ballonFishGame.jpg'
		};
		vm.gameList.push(game);
	}; 
	vm.CreateBallonGame();
	vm.CreateBallonGame();
});