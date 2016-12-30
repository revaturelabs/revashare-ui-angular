(function (ng) {
  ng.module("revashare")
    .service("rideRiderDataService", ["$http", "REVASHARE_API_URL", function ($http, REVASHARE_API_URL) {

      var getRide;
      var dropRideRequest;
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

      viewRides = function (successCallback, failureCallback) {
        $http.get(REVASHARE_API_URL + "api/rider/rides")
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      };

      requestRide = function (ride, successCallback, failureCallback) {
       

        $http.post(REVASHARE_API_URL + "api/rider/bookRide", ride)
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      }

      dropRideRequest = function (ride, successCallback, failureCallback) {
       

        $http.post(REVASHARE_API_URL + "api/rider/unbookRide", ride)
          .then(function (response) {
            console.log(response);
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      }

      this.getRide = getRide;
      this.dropRideRequest = dropRideRequest;
      this.viewRides = viewRides;
      //this.getRiders = getRiders;
      this.requestRide = requestRide;
      this.getRideByApartment = getRideByApartment;
    }]);
})(angular);



