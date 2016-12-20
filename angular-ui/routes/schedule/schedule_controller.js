
angular.module("revashare").controller("schedule_controller", function (serverDataService) {
	var vm = this;
	vm.schedules = [];

	vm.viewSchedules = viewSchedules;

	serverDataService.viewSchedules(
		function success (response) {
			vm.schedules = response;
		},
		function error (response) {

		});

});