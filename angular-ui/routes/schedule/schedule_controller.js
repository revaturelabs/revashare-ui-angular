
angular.module("revashare").controller("schedule_controller", function (serverDataService) {
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