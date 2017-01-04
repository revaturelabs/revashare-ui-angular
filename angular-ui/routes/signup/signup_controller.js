angular.module('revashare').controller('signup_controller', ['$scope', '$document', 'registrationService', 'apartmentDataService', '$state', function ($scope, $document, registrationService, apartmentDataService, $state) {
  var vm = this;

  vm.apartments = [];

  vm.listApartments = listApartments;
  vm.signUp = signUp;

  // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER
  $document.on("keypress", function(event) {
    var key = String.fromCharCode(event.which);
    if (key === "0") {
      $scope.$apply(function() {
        vm.user = {};
        vm.password = "";
      });
    }
    else if (key === "1") {
      $scope.$apply(function() {
        vm.user = {
          UserName: "mohbrien",
          Name: "Matt O'Brien",
          Email: "ohbrien93@hotmail.com",
          PhoneNumber: "(555) 867 - 5309",
          Apartment: vm.apartments[5]
        };
        vm.password = "password";
      });
    }
  });
  // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER

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