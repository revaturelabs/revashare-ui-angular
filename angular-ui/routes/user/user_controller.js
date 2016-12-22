angular.module("revashare").controller("user_controller", function (userDataService) {
  var vm = this;
  vm.users = [];

  vm.addUser = addUser;
  vm.modifyUser = modifyUser;
  vm.removeUser = removeUser;
  vm.upgradeToDriver = upgradeToDriver;

  getAllUsers();

  function addUser () {
    userDataService.addUser(user,
      function success (response) {

      },
      function error () {

      });
  }
  
  function getAllUsers() {
    userDataService.getAllUsers(
      function success (response) {
        vm.users = reponse;
      },
      function error () {
        toastr.error("there was an error retrieving user information");
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

});