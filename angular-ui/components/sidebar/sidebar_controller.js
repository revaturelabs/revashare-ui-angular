
angular.module("revashare").controller("sidebar_controller", function ($scope, $state, displayStateService, loginService) {
    var vm = this;


    vm.sidebar_visible = displayStateService.sidebar_visible;
    vm.sidebar_always_visible = displayStateService.sidebar_always_visible;
    vm.username = displayStateService.username;
    vm.show_sidebar = displayStateService.alert_sidebar_visible;
    vm.hide_sidebar = displayStateService.alert_sidebar_hidden;
    vm.logged_in = displayStateService.logged_in;
    vm.logout = logout;
    

    $scope.$watch(() => {
        return displayStateService.sidebar_visible;
    }, handle_sidebar_visibility);
    

    $scope.$watch(() => {
        return displayStateService.sidebar_always_visible;
    }, handle_sidebar_always_visible);
    

    $scope.$watch(() => {
        return displayStateService.username;
    }, (username) => {
        vm.logged_in = displayStateService.logged_in;
        vm.username = username;
    });


    function handle_sidebar_visibility (is_sidebar_visible) {
        vm.sidebar_visible = is_sidebar_visible;
    }


    function handle_sidebar_always_visible (is_sidebar_always_visible) {
        vm.sidebar_always_visible = is_sidebar_always_visible;
        if (!is_sidebar_always_visible) {
            displayStateService.alert_sidebar_hidden();
        }
    }


    function logout() {
        loginService.logout(function success(response) {
            window.toastr.success('You are now logged out.');
            displayStateService.alert_logged_out();
            $state.go("welcome");
        },
        function error() {
            window.toastr.error("We could not log you out. Please try again.");
        });
    }
});