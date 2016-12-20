(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$stateParams", "$cookies", "rideDataService", "dateService", function($stateParams, $cookies, rideDataService, dateService) {
        var vm = this;

        vm.title = "Create Ride - " + ($stateParams.toWork ? "To Work" : "From Work");
        vm.data = {};

        vm.createRide = function() {
            var ride = vm.data;
            ride.username = $cookies.get("username");
            ride.isToWork = $stateParams.toWork;
            ride.startOfWeekDate = dateService.getThisWeeksDate();
            ride.isOnTime = true;

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