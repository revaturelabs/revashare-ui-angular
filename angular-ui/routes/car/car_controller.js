angular.module("revashare").controller("car_controller", ['$cookies', 'carDataService', function ($cookies, carDataService) {
	var vm = this;

	vm.submitLabel = "Update Car Info";
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
				window.toastr.error('an error has occurred');
			});
	}

	function addCar () {
		carDataService.addCar(vm.newCar,
			function success (response) {

			},
			function error () {
				window.toastr.error('the car was not able to be added');
			});
	}
	
	function viewCarInfo () {
		carDataService.viewCarInfo($cookies.getObject('username'),
			function success (response) {
				vm.car = response;
				if(!response) {
					window.toastr.error('no info was found');
				}
			},
			function error (response) {
				window.toastr.error('an error has occurred');
			});
	}

}]);