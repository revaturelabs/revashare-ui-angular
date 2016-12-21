angular.module("revashare").controller("apartment_controller", function () {
  var vm = this;

 vm.comments = [];
    function listApartments(successCallback, errorCallback) {

        successCallback([
            {
              
                    "name": "The Townes",
                    "latitude": "38.9661",
                    "longitude": "77.3877",                    
                   
            },
            {
                
                    "name": "Camden",
                    "latitude": "38.9583",
                    "longitude": "77.4176",
                
            }
        ]);
    }


     listApartments(
        function success(apartments) {
            vm.apartments = apartments;
        },
        function error() {
            toastr.error("there was an error retrieving comment information");
        }
    )    

});