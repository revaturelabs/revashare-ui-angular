angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', 'userDataService', function (displayStateService, loginService, userDataService) {
  var vm = this;

  vm.login = login;
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
    //displayStateService.alert_logged_in(vm.loginForm.username);
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