angular.module('revashare').controller('login_controller', ['$document', '$scope', 'displayStateService', 'loginService', function ($document, $scope, displayStateService, loginService) {
  var vm = this;

  vm.login = login;
  vm.recoverPassword = recoverPassword;
  vm.loginForm = {};
  vm.formDisabled = false;

  // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER
  $document.on("keypress", function(event) {
    var key = String.fromCharCode(event.which);
    if (key === "0") {
      $scope.$apply(function() {
        vm.loginForm = {};
      });
    }
    else if (key === "2") {
      $scope.$apply(function() {
        vm.loginForm = {
          username: "demo_user",
          password: "password"
        };
      });
    }
    else if (key === "4") {
      $scope.$apply(function() {
        vm.loginForm = {
          username: "rider",
          password: "password"
        };
      });
    }
    else if (key === "6") {
      $scope.$apply(function() {
        vm.loginForm = {
          username: "driver",
          password: "password"
        };
      });
    }
  });
  // -- ONLY FOR DEMONSTRATION PURPOSES; REMOVE LATER

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