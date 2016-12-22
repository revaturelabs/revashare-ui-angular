(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$state", "$stateParams", "$cookies", "rideDataService", "dateService", function($state, $stateParams, $cookies, rideDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "create") {
            vm.title = "Create Ride - " + ($stateParams.toWork ? "To Work" : "From Work");

            vm.createRide = function() {
                rideDataService.createRide($cookies.getObject("username"), dateService.dateToString(dateService.getThisWeeksDate()), vm.data.departureTime, $stateParams.toWork, function(data) {
                    // TODO: handle success
                    console.log("Ride created.");
                    $state.go("driverRideIndex");
                }, function() {
                    // TODO: handle failure
                    console.log("Ride not created.");
                });
            };
        }

        if ($state.current.data.action == "index") {
            var date = dateService.dateToString(dateService.getThisWeeksDate());
            vm.StartOfWeekDate = dateService.getThisWeeksDate().toLocaleDateString();

            function getFromWorkRide() {
                rideDataService.getRide($cookies.getObject("username"), date, false, function(ride) {
                    console.log("Got from work ride!");
                    vm.data.fromWorkRide = ride;
                },
                function() {
                    console.log("Cannot get from work ride.");
                }); 
            }

            rideDataService.getRide($cookies.getObject("username"), date, true, function(ride) {
                console.log("Got to work ride!");
                getFromWorkRide();
                vm.data.toWorkRide = ride;
            },
            function() {
                console.log("Cannot get to work ride.");
                getFromWorkRide();
            });

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