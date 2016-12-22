angular.module("revashare").controller("car_controller", function (carDataService) {
	var vm = this;

	vm.addCar = addCar;
	vm.updateCarInfo = updateCarInfo;

	viewCarInfo();
	
	function updateCarInfo () {
		carDataService.updateCarInfo(vm.car,
			function success (response) {
				if(response) {
					window.toastr.success('update success');
				}
			},
			function error () {
				window.toastr.error('an error has occurred')
			});
	}

	function addCar () {
		carDataService.addCar(vm.newCar,
			function success (response) {

			},
			function error () {
				console.log("error");
			});
	}
	
	function viewCarInfo () {
		carDataService.viewCarInfo('kimbob',
			function success (response) {
				vm.car = response;
			},
			function error (response) {
				console.log("error");
			});
	}

});