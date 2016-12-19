
angular.module("revashare").controller("signup_controller", function (serverDataService) {
    var vm = this;
    
    vm.signupUser = signupUser;
    vm.signupAdmin = signupAdmin;


    function signupUser () {
        serverDataService.signupUser(vm.signupForm.username, vm.signupForm.password, vm.signupForm.email, 
            function success (response) {
                console.log("signed in successfully");
                toastr.success("signed in successfully");
            },
            function error () {
                console.log("error signing in");
                toastr.error("error signing in");
            });
    }

    function signupAdmin () {
        serverDataService.signupAdmin(vm.signupForm.username, vm.signupForm.password, vm.signupForm.email,
            function success (response) {
                console.log("signed in successfully");
                toastr.success("signed in successfully");
            },
            function error () {
                console.log("error signing in");
                toastr.error("error signing in");
            });
    }

});