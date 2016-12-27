angular.module("revashare").controller("user_controller", ['$state', '$stateParams', 'userDataService', 'pendingUserService', function ($state, $stateParams, userDataService, pendingUserService) {
  var vm = this;
  vm.drivers = [];
  vm.riders = [];
  vm.sort = 'name';
  vm.reverse = false;

  vm.viewUser = viewUser;
  vm.addUser = addUser;
  vm.modifyUser = modifyUser;
  vm.removeUser = removeUser;
  vm.approveDriver = approveDriver;

  getRiders();

  function viewUser(username) {
    $state.go('userProfileIndex', {username: username});
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