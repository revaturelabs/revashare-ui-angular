angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', function (displayStateService, loginService) {
  var vm = this;

  vm.login = login;
  vm.logout  = logout;
  vm.recoverPassword = recoverPassword;
  vm.loginForm = {};

  function login() {
    loginService.login(vm.loginForm.username, vm.loginForm.password,
      function success(response) {
        displayStateService.alert_logged_in(vm.loginForm.username,
          function success() {
            window.toastr.success('logged in');
          },
          function error() {

          });
      },
      function error () {
        window.toastr.error('error logging in');
      });
  }

  function logout() {
    loginService.logout(
      function success(response) {
        displayStateService.alert_logged_out(
          function success() {
            window.toastr.error('logged out');
          },
          function error() {

          });
      },
      function error() {

      });
  }

  function recoverPassword() {
    loginService.recoverPassword(vm.loginform.username,
      function success(response) {
        window.toastr.success('email sent');
      },
      function error() {
        window.toastr.error('unable to send email');
      });
  }

}]);