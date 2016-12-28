
(function (ng) {
    ng.module("revashare")
        .controller("apartment_controller", ["$state", "apartmentDataService", function ($state, apartmentDataService) {
            var vm = this;
            vm.data = {};

            if ($state.current.data.action == "create") {
                vm.title = "Create Apartment";

                vm.addApartment = function () {
                    apartmentDataService.addApartment(vm.data.Name, vm.data.Latitude, vm.data.Longitude, function (data) {
                        // TODO: handle success
                        console.log("Apartment created.");
                        $state.go("apartment");
                    }, function () {
                        // TODO: handle failure
                        console.log("Apartment not created.");
                    });
                };
            }

            if ($state.current.data.action == "index") {
                apartmentDataService.listApartments(
                    function success(apartments) {
                        vm.apartments = apartments;
                    },
                    function error() {
                        toastr.error("there was an error retrieving apartment information");
                    }
                );

            }
        }]);

})(angular);