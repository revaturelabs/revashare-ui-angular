(function (ng) {
    angular.module("revashare").controller("riderRideController", ["$state", "$stateParams", "$cookies", "rideRiderDataService", "dateService", function ($state, $stateParams, $cookies, rideRiderDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "index") {
            var date = dateService.getThisWeeksDate();

            vm.title = "My Rides - Week of " + date.toLocaleDateString();
            vm.isLoadingData = true;
            vm.isSubmittingRequest = false;

            vm.data.rides = [];

            vm.toWorkRideExists = function () {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function () {
                return vm.data.fromWorkRide !== undefined;
            };

            rideRiderDataService.viewRides(function(rides) {
                angular.forEach(rides, function(ride) {
                    ride = ride.Ride;
                    var rideDate = (new Date(ride.StartOfWeekDate)).getTime();

                    if (ride.IsAMRide && rideDate >= date.getTime()) {
                        vm.data.toWorkRide = ride;
                    }
                    else if (!ride.IsAMRide && rideDate >= date.getTime()) {
                        vm.data.fromWorkRide = ride;
                    }
                });

                vm.isLoadingData = false;
            }, function() {
                window.toastr.error("We could not find your rides. Please try again later.");
                vm.isLoadingData = false;
            });

            vm.dropRide = function (ride) {
                rideRiderDataService.dropRideRequest(ride, function (data) {
                    window.toastr.success("You have been removed from the ride.");

                    if (ride.IsAMRide) {
                        vm.data.toWorkRide = undefined;
                    }
                    else {
                        vm.data.fromWorkRide = undefined;
                    }

                    vm.isSubmittingRequest = false;
                    $state.go("riderRidesIndex");
                }, function () {
                    window.toastr.error("You could not be removed from the ride. Please try again later.");
                    vm.isSubmittingRequest = false;
                });
            };
        }

        if ($state.current.data.action == "create") {
            var date = dateService.getThisWeeksDate();

            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Rides Available - Week of " + date.toLocaleDateString();
            vm.isLoadingData = true;
            vm.isSubmittingRequest = false;

            vm.data.rides = [];

            rideRiderDataService.getRideByApartment($cookies.getObject("username"), function (rides) {
                angular.forEach(rides, function(ride) {
                    var rideDate = (new Date(ride.StartOfWeekDate)).getTime();

                    if (ride.IsAMRide == $stateParams.toWork && rideDate >= date.getTime()) {
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
                    vm.isSubmittingRequest = false;

                    $state.go("riderRidesIndex");
                }, function () {
                    window.toastr.error("You could not be signed up for the ride. Please try again later.");
                    vm.isSubmittingRequest = false;
                });
            };

            vm.hasNoCapacity = function(ride) {
                return ride.Vehicle.Capacity - ride.NumberOfRidersInRide - 1 <= 0;
            };
        }

        if ($state.current.data.action == "show") {
            var date = dateService.getThisWeeksDate();

            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.isLoadingData = true;
            vm.isSubmittingRequest = false;

            vm.data.ride = {};

            rideRiderDataService.viewRides(function (rides) {
                angular.forEach(rides, function(ride) {
                    ride = ride.Ride;
                    var rideDate = (new Date(ride.StartOfWeekDate)).getTime();

                    if (ride.IsAMRide == $stateParams.toWork && rideDate >= date.getTime()) {
                        console.log(ride);
                        vm.data.ride = ride;
                    }
                });

                vm.isLoadingData = false;
            }, function() {
                window.toastr.error("Could not find your ride.");
                vm.isLoadingData = false;
                $state.go("riderRidesIndex");
            });

            vm.dropRide = function (ride) {
                rideRiderDataService.dropRideRequest(ride, function (data) {
                    window.toastr.success("You have been removed from the ride.");
                    vm.isSubmittingRequest = false;
                    $state.go("riderRidesIndex");
                }, function () {
                    window.toastr.error("You could not be removed from the ride. Please try again later.");
                    vm.isSubmittingRequest = false;
                });
            };
        }
    }]);
})(angular);