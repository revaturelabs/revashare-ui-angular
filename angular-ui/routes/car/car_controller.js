
angular.module("revashare").controller("car_controller", function (serverDataService) {
	var vm = this;

	vm.updateCarInfo = updateCarInfo;
	
	function updateCarInfo () {
		serverDataService.updateCarInfo(
			function success (response) {
				window.toastr.success("car successfully updated");
			},
			function error () {
				window.toastr.error("error updating car");
			});
	}

	serverDataService.viewCarInfo(
		function success (response) {
			vm.car = response || 'help';
			console.log(response);
		},
		function error () {
			console.log("error");
		});

});