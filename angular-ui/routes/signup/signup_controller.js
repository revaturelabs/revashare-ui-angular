angular.module('revashare').controller('signup_controller', ['registrationService', function (registrationService) {
  var vm = this;

  vm.signUp = signUp;

  function signUp() {
    registrationService.signUp(vm.signUpForm.username, vm.signUpForm.password, 
      function success (response) {
        console.log("signed in successfully");
        toastr.success("signed in successfully");
      },
      function error () {
        console.log("error signing in");
        toastr.error("error signing in");
      });
  }

}]);