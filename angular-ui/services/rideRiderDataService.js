(function (ng) {
  ng.module("revashare")
    .service("rideRiderDataService", ["$http", "REVASHARE_API_URL", function ($http, REVASHARE_API_URL) {

      var getRide;
      var createRide;
      var getRiders
      var viewRides
      var requestRide;
      var getRideByApartment;

     
      getRideByApartment = function(apartment, successCallback, failureCallback){
        $http.post(REVASHARE_API_URL + "api/user/get-rides-by-apartment?name=" + apartment )
        .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
      };

      getRide = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "ride?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

      createRide = function (successCallback, failureCallback) {
        $http.post(REVASHARE_API_URL + "api/rider/get-rides")
          .then(function (data) {
            successCallback(data);
          },
          function (data) {
            failureCallback();
          });
      }

      getRiders = function (username, startOfWeekDate, isToWork, successCallback, failureCallback) {
        $http.post(REVASHARE_API_URL + "api/rider?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
          .then(function (data) {
            successCallback(data);
          },
          function (data) {
            failureCallback();
          });
      };

      function viewRides(successCallback, errorCallback) {

        $http.post(REVASHARE_API_URL + "api/driver/getRide")
          .then(function (data) {
            successCallback(data);
          },
          function (data) {
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

        $http.post(REVASHARE_API_URL + "api/rider/add-ride", rideRider)
          .then(function (response) {
            successCallback(response.data);
          },
          function (response) {
            failureCallback();
          });
      }
      this.getRide = getRide;
      this.createRide = createRide;
      this.viewRides = viewRides;
      this.getRiders = getRiders;
      this.requestRide = requestRide;
    }]);
})(angular);



