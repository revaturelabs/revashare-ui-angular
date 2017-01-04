(function(ng) { 
    ng.module("revashare")
    .controller("riderDriverRequestCtrl", ["$scope", "$document", "displayStateService", "riderDataService", function($scope, $document, displayStateService, riderDataService) {
        var vm = this;

        vm.data = {};

        vm.data.vehicle = {};
        vm.role = displayStateService.role;

        // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER
        $document.on("keypress", function(event) {
            var key = String.fromCharCode(event.which);
            if (key === "0") {
                $scope.$apply(function() {
                    vm.data.vehicle = {};
                });
            }
            else if (key === "5") {
                $scope.$apply(function() {
                    vm.data.vehicle = {
                        Make: "Ford",
                        Model: "Pinto",
                        Color: "Yellow",
                        Capacity: 2,
                        LicensePlate: "FEA-5823"
                    };
                });
            }
            else if (event.which === 13) {
                vm.requestDriver();
            }
        });
        // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER

        vm.requestDriver = function() {
            riderDataService.requestDriver(vm.data.vehicle, displayStateService.username, function() {
                vm.role = "DriverRequest";
                displayStateService.role.updateRole("DriverRequest");

                window.toastr.success("Your request has been received! You will receive an email when your request has been approved or denied.");
            }, function() {
                window.toastr.error("Could not submit your request to become a driver. Please try logging out and logging back in.");
            });
        }
    }]);
})(angular);