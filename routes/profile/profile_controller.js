
angular.module("revashare").controller("profile_controller", function (serverDataService) {
    var vm = this;

    vm.flightBookings = [];

    init();

    function init () {

        serverDataService.getMyFlights(
            function success (response) {
                console.log("response is: " + JSON.stringify(repsonse));
            },
            function error (error) {
                console.log("error was: " + error);
            }
        );

    }    

});