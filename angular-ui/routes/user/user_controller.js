angular.module("revashare").controller("user_controller", ['$state', '$stateParams', 'userDataService', 'pendingUserService', function ($state, $stateParams, userDataService, pendingUserService) {
  var vm = this;
  vm.drivers = [];
  vm.pending = [];
  vm.riders = [];
  vm.users = [];
  vm.sort = 'name';
  vm.reverse = false;

  vm.addUser = addUser;
  vm.modifyUser = modifyUser;
  vm.removeUser = removeUser;
  vm.approveDriver = approveDriver;
  vm.demoteDriver = demoteDriver;
  vm.approveUser = approveUser;

  if($state.current.data.action == 'user') {
    getPendingUsers();
  } else if($state.current.data.action == 'driver') {
    getPendingDrivers();
  } else if($state.current.data.action == 'index') {
    getUsers();
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

  function getUsers() {
    userDataService.getUsers(
      function success(response) {
        response.forEach(function(user) {
          if(user.Roles[0].Type === 'Driver') {
            vm.drivers.push(user);
          } else if(user.Roles[0].Type === 'Rider') {
            vm.riders.push(user);
          }
        });
      },
      function error() {
        toastr.error('could not get users');
      });
  }

  function getPendingUsers() {
    pendingUserService.getPendingUsers(
      function success(response) {
        vm.users = response;
      },
      function error() {

      });
  }

  function getPendingDrivers() {
    pendingUserService.getPendingDrivers(
      function success(response) {
        vm.pending = response;
      },
      function error() {

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

  function approveDriver(rider) {
    pendingUserService.approveDriver(rider,
      function success (response) {
        var index = vm.riders.indexOf(rider);
        vm.riders.splice(index, 1);
        vm.drivers.push(rider);
        toastr.success('successfully upgraded');
      },
      function error () {

      });
  }

  function demoteDriver(driver) {
    pendingUserService.demoteDriver(driver,
      function success(response) {
        toastr.success('successfully demoted');
      },
      function error() {
        toastr.error('error');
      })
  }

  function approveUser(user) {
    pendingUserService.approveUser(user,
      function success(response) {
        var index = vm.users.indexOf(user);
        vm.users.splice(index, 1);
        vm.riders.push(user);
        
        $state.$apply;
        toastr.success('successfully upgraded');
      },
      function error() {
        toastr.error('error');
      });
  }

}]);