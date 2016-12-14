
angular.module("revashare").controller("navbar_controller", function (uiController) {
    var vm = this;

    vm.toggleSidebar = toggleSidebar;
    
    function toggleSidebar () {
        uiController.toggleSidebar();
    };

});