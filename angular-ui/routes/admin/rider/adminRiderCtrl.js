(function(ng) {
    ng.module("revashare")
    .controller("adminRiderCtrl", ["$state", "$stateParams", "userDataService", function($state, $stateParams, userDataService) {
        var vm = this;
        vm.data = {};

        if ($stateParams.current.data.action == "index") {
            vm.isLoadingRiders = true;

            userDataService.getPendingRiders(function(riders) {
                vm.data.riders = riders;
                vm.isLoadingRiders = false;
            }, function() {
                window.toastr.error("There was a problem loading the riders, please try again later.");
                $state.go("welcome");
            });
        }
    }]);
})(angular);