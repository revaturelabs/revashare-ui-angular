
angular.module("revashare").controller("sidebar_controller", function ($scope, displayStateService) {
    var vm = this;


    vm.sidebar_visible = displayStateService.sidebar_visible;
    vm.sidebar_always_visible = displayStateService.sidebar_always_visible;
    vm.username = displayStateService.username;
    vm.show_sidebar = displayStateService.alert_sidebar_visible;
    vm.hide_sidebar = displayStateService.alert_sidebar_hidden;
    vm.logout = logout;
    
    $scope.$watch(() => {
        return displayStateService.sidebar_visible;
    }, (sidebar_visible) => {
        $scope.sidebar_visible = sidebar_visible;
    });
    
    $scope.$watch(() => {
        return displayStateService.sidebar_always_visible;
    }, (sidebar_always_visible) => {
        $scope.sidebar_always_visible = sidebar_always_visible;
        if (!sidebar_always_visible) displayStateService.alert_sidebar_hidden();
    });
    
    $scope.$watch(() => {
        return displayStateService.username;
    }, (username) => {
        $scope.username = username;
    });
    
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