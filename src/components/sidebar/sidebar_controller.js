
angular.module("revashare").controller("sidebar_controller", function (displayStateService) {
    var vm = this;


    vm.sidebar_visible = display_state.sidebar_visible;
    vm.sidebar_always_visible = display_state.sidebar_always_visible;
    vm.username = display_state.username;
    vm.show_sidebar = display_state.alert_sidebar_visible;
    vm.hide_sidebar = display_state.alert_sidebar_hidden;
    vm.logout = logout;
    
    vm.$watch(() => {
        return display_state.sidebar_visible;
    }, (sidebar_visible) => {
        $scope.sidebar_visible = sidebar_visible;
    });
    
    vm.$watch(() => {
        return display_state.sidebar_always_visible;
    }, (sidebar_always_visible) => {
        $scope.sidebar_always_visible = sidebar_always_visible;
        if (!sidebar_always_visible) display_state.alert_sidebar_hidden();
    });
    
    vm.$watch(() => {
        return display_state.username;
    }, (username) => {
        $scope.username = username;
    });
    
    function logout() {
        server_data.logout().then(
            function successCallback(response) {
            toastr.success("logged out");
            display_state.alert_logged_out();
        }, 
        function errorCallback(response) {
            if (response.status === 401) {
                toastr.success("logged out");
                display_state.alert_logged_out();
            } else {
                toastr.error("error logging out");
            }

        });
    }

});