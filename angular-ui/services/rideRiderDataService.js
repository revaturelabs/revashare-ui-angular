(function (ng) {
  ng.module("revashare")
    .service("rideRiderDataService", ["$http", "REVASHARE_API_URL", function ($http, REVASHARE_API_URL) {

      var getRide;
      //var createRide;
      //var getRiders
      var viewRides
      var requestRide;
      var getRideByApartment;


      getRideByApartment = function (username, successCallback, failureCallback) {


        $http.get(REVASHARE_API_URL + "api/user/get-user?username=" + username)
          .then(function (response) {
            $http.get(REVASHARE_API_URL + "api/user/get-rides-by-apartment?name=" + response.data.Apartment.Name)
              .then(function (response) {
                //console.log(response);
                successCallback(response.data);
              },
              function (response) {
                failureCallback();
              });
          },
          function () {
            failureCallback();
          });

      };

      getRide = function (username, startOfWeekDate, isToWork, successCallback, failureCallback) {
        var rideRider = {
          ride: {
            Vehicle: {
              Owner: {
                UserName: username
              },
            },
            StartOfWeekDate: startOfWeekDate,
            IsAMRide: isToWork
          }
        };
        $http.post(REVASHARE_API_URL + "ride?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      };

      viewRides = function (username, date, successCallback, failureCallback) {
        $http.get(REVASHARE_API_URL + "api/rider/rides")
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      };

      requestRide = function (driver, startOfWeekDate, isToWork, rider, successCallback, failureCallback) {
        var rideRider = {
          ride: {
            Vehicle: {
              Owner: {
                UserName: driver
              },
            },
            StartOfWeekDate: startOfWeekDate,
            IsAMRide: isToWork
          },
          rider: {
            UserName: rider
          }
        };

        $http.post(REVASHARE_API_URL + "api/rider/bookRide", rideRider)
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      }
      this.getRide = getRide;
      // this.createRide = createRide;
      this.viewRides = viewRides;
      //this.getRiders = getRiders;
      this.requestRide = requestRide;
      this.getRideByApartment = getRideByApartment;
    }]);
})(angular);



