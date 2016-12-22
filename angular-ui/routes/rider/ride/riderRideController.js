(function (ng) {
    angular.module("revashare").controller("riderRideController", ["$state", "$stateParams", "$cookies", "rideRiderDataService", "dateService", function ($state, $stateParams, $cookies, rideRiderDataService, dateService) {
        var vm = this;
        vm.data = {};
        vm.ride = [];
        vm.rides = [];
        vm.rider = [];
        vm.riders = [];

        if ($state.current.data.action == "create") {
            vm.title = "Request Ride - " + ($stateParams.toWork ? "To Work" : "From Work");

            vm.getRideByApartment = function () {
                rideRiderDataService.getRideByApartment("abc",
                    function (data) {
                        // TODO: handle success
                        console.log("Ride request submitted.");
                        $state.go("viewRides");
                    }, function () {
                        // TODO: handle failure
                        console.log("Ride request failed.");
                    });
            };

            vm.createRide = function (index) {
                rideRiderDataService.requestRide(rides[index].Vehicle.Owner.UserName, dateService.dateToString(dateService.getThisWeeksDate()), $stateParams.toWork, $cookies.getObject("username"),
                    function (data) {
                        // TODO: handle success
                        console.log("Ride request submitted.");
                        $state.go("viewRides");
                    }, function () {
                        // TODO: handle failure
                        console.log("Ride request failed.");
                    });
            };
        }

        if ($state.current.data.action == "create") {
            vm.toWorkRideExists = function () {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function () {
                return vm.data.fromWorkRide !== undefined;
            };
        }

        if ($state.current.data.action == "create") {
            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate();
            vm.data.ride = {};
            vm.data.riders = [];

            rideRiderDataService.getRide($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, function (data) {
                console.log("Ride gotten!");
                console.log(data);
                vm.data.ride = data;

                rideDataService.getRiders($cookies.get("username"), dateService.getThisWeeksDate(), $stateParams.toWork, function (data) {
                    console.log("Riders gotten!");
                    console.log(data);
                    vm.data.riders = data;
                }, function () {
                    // TODO: handle failure.
                    console.log("Riders not gotten...");
                });
            }, function () {
                // TODO: handle failure.
                console.log("Ride not gotten...");
            });

            rideRiderDataService.viewRides(
                function success(rides) {
                    vm.rides = rides;
                },
                function error() {
                    console.log("error");
                });

        }
    }]);
})(angular);