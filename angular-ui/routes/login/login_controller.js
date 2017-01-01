angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', function (displayStateService, loginService) {
  var vm = this;

  vm.login = login;
  vm.recoverPassword = recoverPassword;
  vm.loginForm = {};

  function login() {
    loginService.login(vm.loginForm.username, vm.loginForm.password,
      function success(user) {
        window.toastr.success('Welcome, ' + vm.loginForm.username + '!');
        displayStateService.alert_logged_in(user);
      },
      function error () {
        window.toastr.error('We could not login user ' + vm.loginForm.username + '. Please try again.');
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