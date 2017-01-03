(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$state", "$stateParams", "$cookies", "rideDataService", "dateService", function($state, $stateParams, $cookies, rideDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "create") {
            vm.title = "Create Ride - " + ($stateParams.toWork ? "To Work" : "From Work");
            vm.isSubmittingRequest = false;

            vm.createRide = function() {
                rideDataService.createRide($cookies.getObject("username"), dateService.dateToString(dateService.getThisWeeksDate()), vm.data.departureTime, $stateParams.toWork, function(data) {
                    vm.isSubmittingRequest = false;
                    window.toastr.success("Your ride has been created.");
                    $state.go("driverRideIndex");
                }, function() {
                    vm.isSubmittingRequest = false;
                    window.toastr.error("Your ride could not be created. Please try again later.");
                });
            };
        }

        if ($state.current.data.action == "index") {
            vm.StartOfWeekDate = dateService.getThisWeeksDate().toLocaleDateString();
            vm.isLoadingData = true;

            var date = dateService.dateToString(dateService.getThisWeeksDate());

            function getFromWorkRide() {
                rideDataService.getRide($cookies.getObject("username"), date, false, function(ride) {
                    vm.data.fromWorkRide = ride;
                    vm.isLoadingData = false;
                },
                function() {
                    vm.isLoadingData = false;
                }); 
            }

            rideDataService.getRide($cookies.getObject("username"), date, true, function(ride) {
                getFromWorkRide();
                vm.data.toWorkRide = ride;
            },
            function() {
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
            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.isSubmittingRequest = false;

            vm.data.ride = {};
            vm.data.unnapprovedRiders = [];
            vm.data.approvedRiders = [];
            vm.isLoadingData = true;

            var date = dateService.dateToString(dateService.getThisWeeksDate());

            rideDataService.getRide($cookies.getObject("username"), date, $stateParams.toWork, function(data) {
                vm.data.ride = data;

                rideDataService.getRiders($cookies.getObject("username"), date, $stateParams.toWork, function(data) {
                    angular.forEach(data, function(rider) {
                        if (rider.Approved) {
                            vm.data.approvedRiders.push(rider);
                        }
                        else {
                            vm.data.unnapprovedRiders.push(rider);
                        }
                    });

                    vm.isLoadingData = false;
                }, function() {
                    window.toastr.error("Could not get ride data. Please try again later.");
                    vm.isLoadingData = false;
                });
            }, function() {
                window.toastr.error("Could not get ride data. Please try again later.");
                vm.isLoadingData = false;
            });

            vm.approveRider = function(index) {
                // rideDataService.approveRider($cookies.getObject("username"), date, $stateParams.toWork, vm.data.riders[index].UserName, function() {
                rideDataService.approveRider(vm.data.ride, vm.data.unnapprovedRiders[index], function() {
                    vm.isSubmittingRequest = false;
                    vm.data.approvedRiders[index] = true;
                    window.toastr.success("You have approved " + vm.data.unnapprovedRiders[index].Name + " for your ride.");
                }, function() {
                    vm.isSubmittingRequest = false;
                    window.toastr.success("Could no approved " + vm.data.unnapprovedRiders[index].Name + " for your ride. Please try again later.");
                });
            };
        }
    }]);
})(angular);