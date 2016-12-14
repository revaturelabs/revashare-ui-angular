
angular.module("revashare").controller("navbar_controller", function ($mdSidenav) {
    var vm = this;

    vm.toggleSidebar = toggleSidebar;
    
    function toggleSidebar () {
        $mdSidenav("left").toggle();
    };

});