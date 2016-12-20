angular.module("revashare").controller("apartment_controller", function () {
  var vm = this;

 vm.comments = [];
    function listApartments(successCallback, errorCallback) {

        successCallback([
            {
             "ApartmentDTO":{   
                    "Name": "The Townes",
                    "Latitude": "38.9661",
                    "Longitude": "77.3877",                    
                    }
            },
            {
                "ApartmentDTO":{ 
                    "Name": "Camden",
                    "Latitude": "38.9583",
                    "Longitude": "77.4176",
                }
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