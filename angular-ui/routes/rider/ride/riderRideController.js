(function(ng) {
    ng.module("revashare")
    .controller("riderRideController", ["$stateParams", "$cookies", "rideDataService", "rideRiderDataService", "dateService", function($stateParams, $cookies, rideDataService, rideRiderDataService, dateService) {
        var vm = this;

        vm.title = "Request Ride - " + ($stateParams.toWork ? "To Work" : "From Work");
        vm.data = {};
        vm.ridedata = {};

        vm.requestRide = function() {
            var rider = vm.data;
            rider.username = $cookies.get("username");
            var ride = vm.ridedata;
            ride.username = driver.username;
            ride.isToWork = $stateParams.toWork;
            ride.startOfWeekDate = dateService.getThisWeeksDate();
            ride.isOnTime = true;

            if (ride.departureTime === null) {
                return "Departure time cannot be empty.";
            }

            rideDataService.getRide(ride,  function() {
                // TODO: handle success
                console.log("Ride request sent.");
            }, function() {
                // TODO: handle failure
                console.log("Ride request not sent.");
            });
            function riderRideRequest(rider, ride){

            }
        };

        vm.toWorkRideExists = function() {
            return vm.ridedata.toWorkRide !== undefined;
        };

        vm.fromWorkRideExists = function() {
            return vm.ridedata.fromWorkRide !== undefined;
        };
    }]);
})(angular);