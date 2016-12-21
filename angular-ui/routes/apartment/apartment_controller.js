
(function (ng) {
    ng.module("revashare")
        .controller("apartment_controller", ["apartmentDataService", function (apartmentDataService) {
            var vm = this;

            vm.title = "- Create Apartment -";
            vm.data = {};

            vm.addApartment = function () {
                var apartment = vm.data;
                apartment.name = name;               
                apartment.lat = lat;
                apartment.long = long;


                if (apartment.name === null) {
                    return "Name cannot be empty.";
                }

                apartmentDataService.addApartment(apartment, function () {
                    // TODO: handle success
                    console.log("Apartment created.");
                }, function () {
                    // TODO: handle failure
                    console.log("Apartment not created.");
                });
            };

            apartmentDataService.listApartments(
                function success(apartments) {
                    vm.apartments = apartments;
                },
                function error() {
                    toastr.error("there was an error retrieving apartment information");
                }
            );

        }]);
})(angular);


// angular.module("revashare").controller("apartment_controller", function () {
//   var vm = this;

//  vm.comments = [];
//     function listApartments(successCallback, errorCallback) {

//         successCallback([
//             {              
//                     "name": "The Townes",
//                     "latitude": "38.9661",
//                     "longitude": "77.3877",                                 
//             },
//             {                
//                     "name": "Camden",
//                     "latitude": "38.9583",
//                     "longitude": "77.4176",                
//             }
//         ]);
//     }


//      listApartments(
//         function success(apartments) {
//             vm.apartments = apartments;
//         },
//         function error() {
//             toastr.error("there was an error retrieving comment information");
//         }
//     )    

// });