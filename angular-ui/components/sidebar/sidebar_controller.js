
angular.module("revashare").controller("sidebar_controller", function ($scope, displayStateService) {
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
        server_data.logout().then(
            function successCallback(response) {
            toastr.success("logged out");
            displayStateService.alert_logged_out();
        }, 
        function errorCallback(response) {
            if (response.status === 401) {
                toastr.success("logged out");
                displayStateService.alert_logged_out();
            } else {
                toastr.error("error logging out");
            }

        });
    }

});