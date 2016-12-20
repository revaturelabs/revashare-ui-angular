(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$stateParams", "rideDataService", function($stateParams, rideDataService) {
        var vm = this;

        vm.data = {};

        vm.createRide = function() {
            var ride = vm.data.ride;
            ride.isToWork = $stateParams.toWork;

            if (ride.departureTime === null) {
                return "Departure time cannot be empty.";
            }

            rideDataService.createRide(ride, function() {
                // TODO: handle success
                console.log("Ride created.");
            }, function() {
                // TODO: handle failure
                console.log("Ride not created.");
            });
        };
    }]);
})(angular);