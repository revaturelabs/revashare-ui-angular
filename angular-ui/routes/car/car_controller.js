
angular.module("revashare").controller("car_controller", function (serverDataService) {
	var vm = this;

	vm.updateCarInfo = updateCarInfo;
	vm.addCar = addCar;
	vm.car = {};
	
	function updateCarInfo () {
		serverDataService.updateCarInfo(
			function success (response) {
				window.toastr.success("car successfully updated");
			},
			function error () {
				window.toastr.error("error updating car");
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
			console.log("success");
		},
		function error () {
			console.log("error");
		});

});