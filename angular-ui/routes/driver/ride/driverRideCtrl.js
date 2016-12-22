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
            vm.StartOfWeekDate = dateService.getThisWeeksDate().toLocaleDateString();
            vm.isLoadingToWorkRide = true;
            vm.isLoadingFromWorkRide = true;

            var date = dateService.dateToString(dateService.getThisWeeksDate());

            function getFromWorkRide() {
                rideDataService.getRide($cookies.getObject("username"), date, false, function(ride) {
                    console.log("Got from work ride!");
                    vm.data.fromWorkRide = ride;
                    vm.isLoadingFromWorkRide = false;
                },
                function() {
                    console.log("Cannot get from work ride.");
                    vm.isLoadingFromWorkRide = false;
                }); 
            }

            rideDataService.getRide($cookies.getObject("username"), date, true, function(ride) {
                console.log("Got to work ride!");
                getFromWorkRide();
                vm.data.toWorkRide = ride;
                vm.isLoadingToWorkRide = false;
            },
            function() {
                console.log("Cannot get to work ride.");
                getFromWorkRide();
                vm.isLoadingToWorkRide = false;
            });

            vm.toWorkRideExists = function() {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function() {
                return vm.data.fromWorkRide !== undefined;
            };
        }

        if ($state.current.data.action == "show") {
            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.data.ride = {};
            vm.data.riders = [];
            vm.isLoadingData = true;

            var date = dateService.dateToString(dateService.getThisWeeksDate());

            rideDataService.getRide($cookies.getObject("username"), date, $stateParams.toWork, function(data) {
                console.log("Ride gotten!");
                console.log(data);
                vm.data.ride = data;

                rideDataService.getRiders($cookies.getObject("username"), date, $stateParams.toWork, function(data) {
                    console.log("Riders gotten!");
                    console.log(data);
                    vm.data.riders = data;
                    vm.isLoadingData = false;
                }, function() {
                    // TODO: handle failure.
                    console.log("Riders not gotten...");
                    vm.isLoadingData = false;
                });
            }, function() {
                // TODO: handle failure.
                console.log("Ride not gotten...");
            });

            vm.approveRider = function(index) {
                rideDataService.approveRider($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, vm.data.riders[index].username, function() {
                    console.log("Approved rider!");
                    vm.data.riders[index].Approved = true;
                }, function() {
                    // TODO: handle failure
                    console.log("Could not approve rider...");
                });
            }
        }
    }]);
})(angular);