
angular.module("revashare").controller("login_controller", function (displayStateService, serverDataService) {
    var vm = this;

    vm.loginUser = loginUser;
    vm.loginAdmin = loginAdmin;

    function loginUser () {
        serverDataService.loginUser(vm.loginForm.username, vm.loginForm.password, 
            function success (response) {
                console.log("logged in successfully");
                window.toastr.success("successfully logged in");
                //userStateService.notify_loggedIn(true);
            },
            function error () {
                console.log("error logging in");
                window.toastr.error("error logging in");
                //userStateService.notify_loggedIn(false);
            });
    }

    function loginAdmin () {
        serverDataService.loginAdmin(vm.loginForm.username, vm.loginForm.password, 
            function success (response) {
                console.log("logged in successfully");
                window.toastr.success("successfully logged in");
                //userStateService.notify_loggedIn(true);
            },
            function error () {
                console.log("error logging in");
                window.toastr.error("error logging in");
                //userStateService.notify_loggedIn(false);
            });
    }

});