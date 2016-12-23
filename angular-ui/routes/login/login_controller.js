angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', function (displayStateService, loginService) {
  var vm = this;

  vm.login = login;
  vm.logout  = logout;
  vm.loginForm = {};

  function login() {
    loginService.login(vm.loginForm.username, vm.loginForm.password,
      function success(response) {
        displayStateService.alert_logged_in(vm.loginForm.username,
          function success() {

          },
          function error() {

          });
      },
      function error () {
        window.toastr.error('error logging in');
      });
  }

  function logout() {
    loginDataService.logout(
      function success(response) {
        window.toastr.error('logged out')
      },
      function error() {

      });
  }

}]);