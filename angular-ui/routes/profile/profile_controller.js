
angular.module("revashare").controller("profile_controller", function (serverDataService) {
    var vm = this;

    vm.updateCarInfo = updateCarInfo;

    function updateCarInfo () {
        serverDataService.updateCarInfo(vm.carForm.make, vm.carForm.model, vm.carForm.licensePlate, vm.carForm.color, vm.carForm.capacity,
            function success (response) {
                console.log("success");
            },
            function error () {
                console.log("error");
            });
    }

});