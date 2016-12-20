
angular.module("revashare").controller("schedule_controller", function () {
	var vm = this;

	vm.viewSchedules = viewSchedules;
	
	function viewSchedules () {
		serverDataService.viewSchedules(
			function success (response) {

			},
			function error (response) {

			});
	}
});