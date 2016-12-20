
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

	function viewCarInfo () {
		serverDataService.viewCarInfo(
			function success (response) {
				console.log("success");
			},
			function error () {
				console.log("error");
			});
	}

});