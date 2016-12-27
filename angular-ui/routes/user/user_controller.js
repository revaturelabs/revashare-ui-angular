angular.module("revashare").controller("user_controller", ['$state', 'userDataService', 'pendingUserService', function ($state, userDataService, pendingUserService) {
  var vm = this;
  vm.drivers = [];
  vm.riders = [];

  vm.viewUser = viewUser;
  vm.addUser = addUser;
  vm.modifyUser = modifyUser;
  vm.removeUser = removeUser;
  vm.approveDriver = approveDriver;

  function viewUser(index) {
    $state.go('userProfileIndex', {username: vm.drivers[index].UserName});
  }

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

  function approveDriver(index) {
    pendingUserService.approveDriver(vm.riders[index],
      function success (response) {

      },
      function error () {

      });
  }

}]);