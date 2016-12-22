// (function(ng) {
//     ng.module("revashare")
//      .service("rideRiderDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
                
//          var getRides;
// //         var requestRide;

//                getRides = function(successCallback, failureCallback){
//                    $http.post(REVASHARE_API_URL  + "api/rider/get-rides")
                   
//                }

// //         getRiders = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
// //             $http.get(REVASHARE_API_URL + "api/rider?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
// //             .then(function(data) {
// //                 successCallback(data);
// //             },
// //             function(data) {
// //                 failureCallback();
// //             });
// //         };

// //         requestRide = function(driver, startOfWeekDate, isToWork, rider, successCallback, failureCallback) {
// //             var rideRider = {
// //                 ride: {
// //                     driver: driver,
// //                     startOfWeekDate: startOfWeekDate,
// //                     isToWork: isToWork
// //                 },
// //                 rider: rider
// //             };

// //             $http.post(REVASHARE_API_URL + "api/rider/add-ride", rideRider)
// //             .then(function(data) {
// //                 successCallback(data);
// //             },
// //             function(data) {
// //                 failureCallback();
// //             });
// //         }        
        
// //         this.getRiders = getRiders;
// //         this.requestRide = requestRide;
//     }]);
// })(angular);