app.controller('GamesCtrl', function(){
	var vm = this;
	vm.gameList = [];
	vm.CreateBallonGame = function(){
		var game = {
			link : 'https://peixebalao.azurewebsites.net/public/index.html',
			name : 'Ballon Fish',
			description : 'Avoid the spikes and the squares by jump with the spacebar key, the more you get hit the harder the game gets, try out and beat my best score of 9999',
			image: 'images/ballonFishGame.jpg'
		};
		vm.gameList.push(game);
	};
	vm.CreateBallonGame();
	var myapp = {
			link : '#',
			name : 'My Portfolio',
			description : 'Website developed to test my front-end skills and a way to display to others all my code',
			image: 'images/this.jpg'
		};
	vm.gameList.push(myapp);
});