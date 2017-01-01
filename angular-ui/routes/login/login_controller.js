angular.module('revashare').controller('login_controller', ['displayStateService', 'loginService', function (displayStateService, loginService) {
  var vm = this;

  vm.login = login;
  vm.recoverPassword = recoverPassword;
  vm.loginForm = {};
  vm.formDisabled = false;

  function login() {
    loginService.login(vm.loginForm.username, vm.loginForm.password,
      function success(user) {
        window.toastr.success('Welcome, ' + vm.loginForm.username + '!');
        displayStateService.alert_logged_in(user);
        vm.formDisabled = false;
      },
      function error () {
        window.toastr.error('We could not login user ' + vm.loginForm.username + '. Please try again.');
        vm.formDisabled = false;
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