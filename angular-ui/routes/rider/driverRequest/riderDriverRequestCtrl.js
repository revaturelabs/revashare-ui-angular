(function(ng) { 
    ng.module("revashare")
    .controller("riderDriverRequestCtrl", ["displayStateService", "riderDataService", function(displayStateService, riderDataService) {
        var vm = this;

        vm.data = {};

        vm.data.vehicle = {};
        vm.role = displayStateService.role;

        vm.requestDriver = function() {
            riderDataService.requestDriver(vm.data.vehicle, displayStateService.username, function() {
                vm.role = "DriverRequest";
                displayStateService.role = "DriverRequest";

                window.toastr.success("Your request has been received! You will receive an email when your request has been approved or denied.");
            }, function() {
                window.toastr.error("Could not submit your request to become a driver. Please try logging out and logging back in.");
            });
        }
    }]);
})(angular);