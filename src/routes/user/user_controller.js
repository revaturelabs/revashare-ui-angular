




angular.module("revashare").controller("user_controller", function (serverDataService) {
    var vm = this;
    vm.users = [];

    serverDataService.getAllUsers(
        function success (users) {
            vm.users = users;
        },
        function error () {
            toastr.error("there was an error retrieving user information");
        }
    )

});