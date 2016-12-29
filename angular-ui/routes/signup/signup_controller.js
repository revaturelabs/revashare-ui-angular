angular.module('revashare').controller('signup_controller', ['registrationService', 'apartmentDataService', '$state', function (registrationService, apartmentDataService, $state) {
  var vm = this;

  vm.apartments = [];

  vm.listApartments = listApartments;
  vm.signUp = signUp;

  listApartments();

  function signUp() {
    registrationService.signUp(vm.user, vm.password, 
      function success (response) {
        toastr.success("signed in successfully");
        $state.go('login');
      },
      function error () {
        toastr.error("error signing in");
      });
  }

  function listApartments() {
    apartmentDataService.listApartments(
      function success(response) {
        vm.apartments = response;
      },
      function error() {
        toastr.error('error loading apartments');
      });
  }

}]);