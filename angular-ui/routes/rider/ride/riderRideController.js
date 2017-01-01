(function (ng) {
    angular.module("revashare").controller("riderRideController", ["$state", "$stateParams", "$cookies", "rideRiderDataService", "dateService", function ($state, $stateParams, $cookies, rideRiderDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "index") {
            vm.title = "Request Rides - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.isLoadingData = true;

            vm.data.rides = [];

            vm.toWorkRideExists = function () {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function () {
                return vm.data.fromWorkRide !== undefined;
            };

            rideRiderDataService.viewRides(function(rides) {
                angular.forEach(rides, function(ride) {
                    if (ride.isAMRide) {
                        vm.data.toWorkRide = ride;
                    }
                    else {
                        vm.data.fromWorkRide = ride;
                    }
                });
            }, function() {
                window.toastr.error("We could not find your rides. Please try again later.");
            });

            vm.dropRide = function (ride) {
                rideRiderDataService.dropRideRequest(ride, function (data) {
                    window.toastr.success("You have been removed from the ride.");
                }, function () {
                    window.toastr.error("You could not be removed from the ride. Please try again later.");
                });
            };
        }

        if ($state.current.data.action == "create") {
            vm.title = "Rides Available - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.isLoadingData = true;

            vm.data.rides = [];

            rideRiderDataService.getRideByApartment($cookies.getObject("username"), function (rides) {
                angular.forEach(rides, function(ride) {
                    if (ride.IsAMRide == $stateParams.toWork) {
                        vm.data.rides.push(ride);
                    }
                });

                vm.isLoadingData = false;
            }, function () {
                window.toastr.error("Could not get rides at your apartment. Please try again later.");

                vm.isLoadingData = false;
            });

            vm.createRide = function(ride) {
                rideRiderDataService.requestRide(ride, function (data) {
                    window.toastr.success("You have signed up for the ride.");
                    $state.go("riderRidesIndex");
                }, function () {
                    window.toastr.error("You could not be signed up for the ride. Please try again later.");
                });
            };

            vm.hasNoCapacity = function(ride) {
                return ride.Vehicle.Capacity - ride.NumberOfRidersInRide <= 0;
            }
        }

        if ($state.current.data.action == "show") {
            vm.title = "Rides - Week of " + dateService.getThisWeeksDate().toLocaleDateString();

            vm.data.rides = [];

            rideRiderDataService.viewRides(
                function (rides) {
                    vm.data.rides = rides;
                    console.log(rides);
                },
                function error() {
                    console.log("error");
                });
        }
    }]);
})(angular);