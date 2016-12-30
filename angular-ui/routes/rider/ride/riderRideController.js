(function (ng) {
    angular.module("revashare").controller("riderRideController", ["$state", "$stateParams", "$cookies", "rideRiderDataService", "dateService", function ($state, $stateParams, $cookies, rideRiderDataService, dateService) {
        var vm = this;
        vm.data = {};
        vm.data.ride = {};
        vm.data.rides = [];
        vm.data.rider = {};
        vm.data.riders = [];

        if ($state.current.data.action == "index") {
            vm.title = "Request Rides - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            vm.getRideByApartment = function (index) {

            };
        }
        if ($state.current.data.action == "create") {
            vm.title = "Rides Available - Week of " + dateService.getThisWeeksDate().toLocaleDateString();
            rideRiderDataService.getRideByApartment($cookies.getObject("username"),
                function (data) {
                    // TODO: handle success
                    //console.log("Ride request submitted.");
                    vm.data.rides = data;
                    // $state.go("viewRides");
                }, function () {
                    // TODO: handle failure
                    console.log("Ride request failed.");
                });
            vm.toWorkRideExists = function () {
                return vm.data.toWorkRide !== undefined;
            };

            vm.fromWorkRideExists = function () {
                return vm.data.fromWorkRide !== undefined;
            };
        }

        vm.createRide = function (ride) {
            rideRiderDataService.requestRide(ride,
                function (data) {
                    // TODO: handle success
                    console.log("Ride request submitted.");
                    $state.go("riderRideShow");
                }, function () {
                    // TODO: handle failure
                    console.log("Ride request failed.");
                });
        };

        vm.dropRide = function (ride) {
            rideRiderDataService.dropRideRequest(ride,
                function (data) {
                    // TODO: handle success
                    console.log("Ride dropped.");
                    // $state.go("viewRides");
                }, function () {
                    // TODO: handle failure
                    console.log("Could not drop ride.");
                });
        };



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