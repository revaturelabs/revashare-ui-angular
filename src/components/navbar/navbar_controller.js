
angular.module("revashare").controller("navbar_controller", function (displayStateService) {
    var vm = this;

    vm.toggle_sidebar = toggle_sidebar;
    
    function toggle_sidebar () {
        displayStateService.toggle_sidebar();
    };

});