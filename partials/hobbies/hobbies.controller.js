app.controller('HobbiesCtrl', function () {
	var vm = this;
	vm.hobbies = [];
	var cycling = {
		name: 'Cycling',
		pictures:[]
	};
	var bananaBreak = {
		image:'images/cycling/bananaBreak.jpg',
		description: 'Banana break'
	};
	var subir = {
		image:'images/cycling/boss.jpg',
		description: 'Pushing myself at the start of a climb'
	};
	var trilho = {
		image:'images/cycling/cavalinhos.jpg',
		description: "Landscape at one of the Ericeira's trail"
	};
	var paragem = {
		image:'images/cycling/sobreiro.jpg',
		description: 'Beer break at a local Festival'
	};
	var chuva = {
		image:'images/cycling/chuva.jpg',
		description: 'Trail completly flooded'
	};
	cycling.pictures.push(bananaBreak);
	cycling.pictures.push(subir);
	cycling.pictures.push(trilho);
	cycling.pictures.push(paragem);
	cycling.pictures.push(chuva);
	vm.hobbies.push(cycling);
});