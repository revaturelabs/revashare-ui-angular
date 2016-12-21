(function(ng) {
    ng.module("revashare")
    .controller("riderRideController", ["$stateParams", "$cookies", "rideDataService", "dateService", function($stateParams, $cookies, rideDataService, dateService) {
        var vm = this;

        vm.title = "Request Ride - " + ($stateParams.toWork ? "To Work" : "From Work");
        vm.data = {};

        vm.getRide = function() {
            var rider = vm.data;
            rider.username = $cookies.get("username");
            rider.isToWork = $stateParams.toWork;
            rider.startOfWeekDate = dateService.getThisWeeksDate();
            rider.isOnTime = true;

            if (rider.departureTime === null) {
                return "Departure time cannot be empty.";
            }

            rideDataService.getRide(ride, function() {
                // TODO: handle success
                console.log("Ride request sent.");
            }, function() {
                // TODO: handle failure
                console.log("Ride request not sent.");
            });
        };

        vm.toWorkRideExists = function() {
            return vm.data.toWorkRide !== undefined;
        };

        vm.fromWorkRideExists = function() {
            return vm.data.fromWorkRide !== undefined;
        };
    }]);
})(angular);