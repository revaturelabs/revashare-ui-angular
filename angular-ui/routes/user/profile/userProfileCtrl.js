(function(ng) {
    ng.module("revashare")
    .controller("userProfileCtrl", ["$state", "$cookies", "userDataService", "apartmentDataService", "displayStateService", function($state, $cookies, userDataService, apartmentDataService, displayStateService) {
        //displayStateService.callIfIsInGroup(["Unassigned", "Rider", "Driver", "Admin"], function() {
            var vm = this;
            vm.data = {};
            
            if ($state.current.data.action == "index") {
                //userDataService.getUser($cookies.getObject("username"), function(user) {
                userDataService.getUser("testdriver", function(user) {
                    vm.data.user = user;
                }, function() {
                    console.log("Could not get user...");
                });
            }

            if ($state.current.data.action == "edit") {
                vm.apartmentsLoading = true;
                vm.apartments = [];

                //userDataService.getUser($cookies.getObject("username"), function(user) {
                userDataService.getUser("testdriver", function(user) {
                    vm.data.user = user;

                    apartmentDataService.listApartments(function(apartments) {
                        vm.apartments = apartments;

                        ng.forEach(apartments, function(apartment) {
                            if (apartment.Name == user.Apartment.Name) {
                                vm.data.apartment = apartment;
                            }
                        });

                        vm.apartmentsLoading = false;
                    },
                    function() {
                        console.log("Could not get apartments.");
                        $state.go("userProfileIndex");
                    });
                }, function() {
                    console.log("Could not get user...");
                });

                vm.updateProfile = function() {
                    userDataService.modifyUser("testdriver", vm.data.user.Name, vm.data.user.Email, vm.data.user.PhoneNumber, vm.data.apartment.Name, function(data) {
                        console.log("Updated user!");
                        $state.go("userProfileIndex");
                    }, function() {
                        console.log("Could not update user.");
                    });
                };
            }
        //});
    }]);
})(angular);