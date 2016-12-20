
angular.module("revashare").controller("profile_controller", function (serverDataService) {
    var vm = this;

    vm.user = {};
    
    serverDataService.viewProfile(
        function success (user) {
            vm.user = user;
        },
        function error () {
            console.log("error");
        }
    );  

});