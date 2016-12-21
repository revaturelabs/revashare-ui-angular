(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$state", "$stateParams", "$cookies", "rideDataService", "dateService", function($state, $stateParams, $cookies, rideDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "create") {
            vm.title = "Create Ride - " + ($stateParams.toWork ? "To Work" : "From Work");

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
        }

        if ($state.current.data.action == "index") {
            vm.toWorkRideExists = function() {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function() {
                return vm.data.fromWorkRide !== undefined;
            };
        }

        if ($state.current.data.action == "show") {
            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate();
            vm.data.ride = {};
            vm.data.riders = [];

            rideDataService.getRide($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, function(data) {
                console.log("Ride gotten!");
                console.log(data);
                vm.data.ride = data;

                rideDataService.getRiders($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, function(data) {
                    console.log("Riders gotten!");
                    console.log(data);
                    vm.data.riders = data;
                }, function() {
                    // TODO: handle failure.
                    console.log("Riders not gotten...");
                });
            }, function() {
                // TODO: handle failure.
                console.log("Ride not gotten...");
            });

            vm.approveRider = function(index) {
                rideDataService.approveRider($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, vm.data.riders[index].username, function() {
                    console.log("Approved rider!");
                    vm.data.riders[index].approved = true;
                }, function() {
                    // TODO: handle failure
                    console.log("Could not approve rider...");
                });
            }
        }
    }]);
})(angular);