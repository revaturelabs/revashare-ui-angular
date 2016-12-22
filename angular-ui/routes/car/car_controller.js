
angular.module("revashare").controller("car_controller", function (serverDataService) {
	var vm = this;

	vm.updateCarInfo = updateCarInfo;
	vm.addCar = addCar;
	vm.car = {};
	
	function updateCarInfo () {
		serverDataService.updateCarInfo(vm.car,
			function success (response) {
			},
			function error () {
				console.log("error");
			});
	}

	function addCar () {
		serverDataService.addCar(car,
			function success (response) {

			},
			function error () {

			});
	}
	
	serverDataService.viewCarInfo(
		function success (response) {
			vm.car = response;
		},
		function error () {
			console.log("error");
		});

});