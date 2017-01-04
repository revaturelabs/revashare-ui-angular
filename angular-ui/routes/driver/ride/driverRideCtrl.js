(function(ng) {
    ng.module("revashare")
    .controller("driverRideCtrl", ["$scope", "$document", "$state", "$stateParams", "$cookies", "rideDataService", "dateService", function($scope, $document, $state, $stateParams, $cookies, rideDataService, dateService) {
        var vm = this;
        vm.data = {};

        if ($state.current.data.action == "create") {
            vm.title = "Create Ride - " + ($stateParams.toWork ? "To Work" : "From Work");
            vm.isSubmittingRequest = false;

            // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER
            $document.on("keypress", function(event) {
                var key = String.fromCharCode(event.which);
                if (key === "0") {
                    $scope.$apply(function() {
                        vm.data.departureTime = "";
                    });
                }
                else if (key === "7") {
                    $scope.$apply(function() {
                        vm.data.departureTime = "17:00:00";
                    });
                }
                else if (event.which === 13) {
                    vm.isSubmittingRequest = true;
                    vm.createRide();
                }
            });
            // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER

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
                        if (rider.Accepted) {
                            vm.data.approvedRiders.push(rider.Rider);
                        }
                        else {
                            vm.data.unnapprovedRiders.push(rider.Rider);
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
                    vm.data.approvedRiders.push(vm.data.unnapprovedRiders[index]);
                    window.toastr.success("You have approved " + vm.data.unnapprovedRiders[index].Name + " for your ride.");
                    vm.data.unnapprovedRiders.splice(index, 1);
                }, function() {
                    vm.isSubmittingRequest = false;
                    window.toastr.error("Could not approved " + vm.data.unnapprovedRiders[index].Name + " for your ride. Please try again later.");
                });
            };
        }
    }]);
})(angular);