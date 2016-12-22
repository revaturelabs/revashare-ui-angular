
angular.module("revashare").controller("riderRideController", function (serverDataService) {
    var vm = this;
    vm.ride = [];
    vm.rides = [];
    vm.rider = [];
    vm.riders = [];

    serverDataService.viewRides(
        function success(rides) {
            vm.rides = rides;
        },
        function error() {
            console.log("error");
        });

    serverDataService.requestRide(
        function success(ride, rider) {
            vm.ride = ride;
        },
        function error() {
            console.log("error");
        });

});