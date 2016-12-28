angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', 'userDataService', function (displayStateService, loginService, userDataService) {
  var vm = this;

  vm.login = login;
  vm.logout  = logout;
  vm.recoverPassword = recoverPassword;
  vm.loginForm = {};

  function login() {
    loginService.login(vm.loginForm.username, vm.loginForm.password,
      function success(response) {
        window.toastr.success('Welcome, ' + vm.loginForm.username + '!');
        displayStateService.alert_logged_in(vm.loginForm.username);
      },
      function error () {
        window.toastr.error('We could not login user ' + vm.loginForm.username + '. Please try again.');
      });
    //displayStateService.alert_logged_in(vm.loginForm.username);
  }

  function logout() {
    loginService.logout(
      function success(response) {
        window.toastr.success('You are now logged out.');
        displayStateService.alert_logged_out();
      },
      function error() {
        window.toastr.error("We could not log you out. Please try again.");
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