(function (ng) {
    angular.module("revashare").controller("riderRideController", ["$state", "$stateParams", "$cookies", "rideRiderDataService", "dateService", function ($state, $stateParams, $cookies, rideRiderDataService, dateService) {
        var vm = this;
        vm.data = {};
        vm.ride = [];
        vm.rides = [];
        vm.rider = [];
        vm.riders = [];

        if ($state.current.data.action == "index") {
            vm.title = "Request Ride - " + ($stateParams.toWork ? "To Work" : "From Work");

            vm.getRideByApartment = function (index) {
                
            };
        }
        if ($state.current.data.action == "create") {
            rideRiderDataService.getRideByApartment($cookies.getObject("username"), 
                    function (data) {
                        // TODO: handle success
                        console.log("Ride request submitted.");
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




        if ($state.current.data.action == "show") {
            vm.title = ($stateParams.toWork ? "To Work" : "From Work") + " Ride - Week of " + dateService.getThisWeeksDate();

            vm.data.rides = [];

            rideRiderDataService.viewRides($cookies.getObject("username"), dateService.dateToString(dateService.getThisWeeksDate()),
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