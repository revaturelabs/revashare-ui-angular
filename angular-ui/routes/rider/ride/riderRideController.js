
angular.module("revashare").controller("riderRideController", function (rideRiderDataService) {
    var vm = this;
    vm.ride = [];
    vm.rides = [];
    vm.rider = [];
    vm.riders = [];

    rideRiderDataService.viewRides(
        function success(rides) {
            vm.rides = rides;
        },
        function error() {
            console.log("error");
        });

    rideRiderDataService.requestRide(
        function success(ride, rider) {
            vm.ride = ride;
        },
        function error() {
            console.log("error");
        });

});