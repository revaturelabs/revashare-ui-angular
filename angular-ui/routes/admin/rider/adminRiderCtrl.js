(function(ng) {
    ng.module("revashare")
    .controller("adminRiderCtrl", ["$state", "$stateParams", "userDataService", function($state, $stateParams, userDataService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "index") {
            vm.isLoadingRiders = true;

            userDataService.getPendingRiders(function(riders) {
                vm.data.riders = riders;
                vm.isLoadingRiders = false;
            }, function() {
                window.toastr.error("There was a problem loading the riders, please try again later.");
                $state.go("welcome");
            });

            vm.approveRider = function(index) {
                var username = vm.data.riders[index].UserName;

                userDataService.approveRider(username, function() {
                    vm.data.riders.splice(index, 1);
                    window.toastr.success("User " + username + " has been approved and is now a rider.");
                }, function() {
                    window.toastr.error("Could not approve user " + username + ", please try again later.");
                });
            };

            vm.denyRider = function(index) {
                var username = vm.data.riders[index].UserName;

                userDataService.removeUser(username, function() {
                    vm.data.riders.splice(index, 1);
                    window.toastr.success("User " + username + " has been removed.");
                }, function() {
                    window.toastr.error("Could not remove user " + username + ", please try again later.");
                });
            };
        }
    }]);
})(angular);