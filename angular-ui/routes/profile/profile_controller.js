
angular.module("revashare").controller("profile_controller", function (serverDataService) {
    var vm = this;

    vm.updateProfile = updateProfile;
    vm.user = {};
    
    serverDataService.viewProfile(
        function success (user) {
            vm.user = user;
        },
        function error () {
            console.log("error");
        }
    );  

    function updateProfile() {
        serverDataService.updateProfile(
            function success (user) {

            },
            function error() {

            }
        )
    }
});