angular.module("revashare").controller("sidebar_controller", ['loginService', '$state', '$scope', 'displayStateService', function (loginService, $state, $scope, displayStateService) {
    var vm = this;


    vm.sidebar_visible = displayStateService.sidebar_visible;
    vm.sidebar_always_visible = displayStateService.sidebar_always_visible;
    vm.username = displayStateService.username;
    vm.show_sidebar = displayStateService.alert_sidebar_visible;
    vm.hide_sidebar = displayStateService.alert_sidebar_hidden;
    vm.toggle_sidebar = displayStateService.toggle_sidebar;
    vm.logged_in = displayStateService.logged_in;
    vm.logout = logout;
    
    displayStateService.addSidebarVisibleListener(handle_sidebar_visibility);
    displayStateService.addSidebarAlwaysVisibleListener(handle_sidebar_always_visible);
    

    $scope.$watch(() => {
        return displayStateService.username;
    }, (username) => {
        vm.logged_in = displayStateService.logged_in;
        vm.username = username;
    });


    function handle_sidebar_visibility (is_sidebar_visible) {
        console.log(vm);
        vm.sidebar_visible = displayStateService.sidebar_visible;
    }


    function handle_sidebar_always_visible (is_sidebar_always_visible) {
        vm.sidebar_always_visible = displayStateService.sidebar_always_visible;
    }


    function logout() {
        function lo() {
            window.toastr.success('You are now logged out.');
            displayStateService.alert_logged_out();
            $state.go("welcome");
        }

        loginService.logout(lo, lo);
    }
}]);