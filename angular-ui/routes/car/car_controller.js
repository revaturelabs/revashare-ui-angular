
angular.module("revashare").controller("car_controller", function (serverDataService) {
	var vm = this;

	function updateCarInfo () {
		serverDataService.updateCarInfo(
			function success (response) {
				window.toastr.success("car successfully updated");
			},
			function error () {
				window.toastr.error("error updating car");
			});
	}

});