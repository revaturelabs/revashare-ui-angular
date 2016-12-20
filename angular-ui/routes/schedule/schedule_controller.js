
angular.module("revashare").controller("schedule_controller", function (serverDataService) {
	var vm = this;
	vm.schedules = [];

	serverDataService.viewSchedules(
		function success (schedules) {
			vm.schedules = schedules;
		},
		function error () {
			console.log("error");
		});

});