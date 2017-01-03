(function(ng) {
    ng.module("revashare")
    .controller("userProfileCtrl", ["$state", "$stateParams", "$cookies", "userDataService", "apartmentDataService", function($state, $stateParams, $cookies, userDataService, apartmentDataService) {
        var vm = this;
        vm.data = {};

        var username = $cookies.getObject("username");

        if ($stateParams.username) {
            username = $stateParams.username;
        }
        
        if ($state.current.data.action == "index") {
            userDataService.getUser(username, function(user) {
                vm.data.user = user;
            }, function() {
                window.toastr.error("Could not load user data. Please try again later.");
            });
        }

        if ($state.current.data.action == "edit") {
            vm.apartmentsLoading = true;
            vm.apartments = [];

            userDataService.getUser(username, function(user) {
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
                    window.toastr.error("Could not load user data. Please try again later.");
                    $state.go("userProfileIndex");
                });
            }, function() {
                window.toastr.error("Could not load user data. Please try again later.");
                $state.go("userProfileIndex");
            });

            vm.updateProfile = function() {
                userDataService.modifyUser($cookies.getObject("username"), vm.data.user.Name, vm.data.user.Email, vm.data.user.PhoneNumber, vm.data.apartment.Name, function(data) {
                    window.toastr.success("You have updated your information.");
                    $state.go("userProfileIndex");
                }, function() {
                    window.toastr.success("Could not update your information. Please try again later.");
                });
            };
        }
    }]);
})(angular);