(function(ng) {
    ng.module("revashare")
    .controller("userProfileCtrl", ["$state", "$cookies", "userDataService", function($state, $cookies, userDataService) {
        var vm = this;
        vm.data = {};
        
        userDataService.getUser($cookies.getObject("username"), function(user) {
            vm.data.user = user;
        }, function() {
            console.log("Could not get user...");
        });

        if ($state.current.data.action == "edit") {
            vm.updateProfile = function() {
                // TODO
            };
        }
    }]);
})(angular);