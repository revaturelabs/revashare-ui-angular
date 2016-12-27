angular.module("revashare").controller("user_controller", ['userDataService', 'pendingUserService', function (userDataService, pendingUserService) {
  var vm = this;
  vm.drivers = [];
  vm.riders = [];

  vm.addUser = addUser;
  vm.modifyUser = modifyUser;
  vm.removeUser = removeUser;
  vm.upgradeToDriver = upgradeToDriver;

  function addUser () {
    userDataService.addUser(user,
      function success (response) {

      },
      function error () {

      });
  }
  
  function getDrivers() {
    userDataService.getDrivers(
      function success (response) {
        vm.drivers = response;
      },
      function error () {
        toastr.error("could not retrieve drivers");
      });
  }

  function getRiders() {
    userDataService.getRiders(
      function success (response) {
        vm.riders = response;
      },
      function error () {
        toastr.error("could not retrieve riders");
      });
  }

  function modifyUser () {
    userDataService.modifyUser(user,
      function success (response) {

      },
      function error () {

      });
  }

  function removeUser () {
    userDataService.removeUser(user,
      function success (response) {

      },
      function error() {

      });
  }

  function upgradeToDriver(index) {
    userDataService.upgradeToDriver(vm.users[index],
      function success (response) {
        console.log("works");
      },
      function error () {

      });
  }

}]);