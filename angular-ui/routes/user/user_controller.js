
angular.module("revashare").controller("user_controller", function (serverDataService) {
    var vm = this;
    vm.users = [];

    vm.upgradeToDriver = upgradeToDriver;

    serverDataService.getAllUsers(
        function success (users) {
            vm.users = users;
        },
        function error () {
            toastr.error("there was an error retrieving user information");
        }
    )

    function addUser () {
        serverDataService.addUser(user,
            function success (response) {

            },
            function error () {

            });
    }

    function modifyUser () {
        serverDataService.addUser(user,
            function success (response) {

            },
            function error () {

            });
    }

    function removeUser () {
        serverDataService.addUser(user,
            function success (response) {

            },
            function error() {

            });
    }

    function upgradeToDriver(index) {
        serverDataService.upgradeToDriver(vm.users[index],
            function success (response) {
                console.log("works");
            },
            function error () {

            });
    }

});