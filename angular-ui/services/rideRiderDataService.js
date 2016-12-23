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

        successCallback([
          {
            "RideDTO": {
              "DriverDTO": {
                "Name": "Joe Blow",
                "PhoneNumber": "123-123-1234",
                "ApartmentDTO": {
                  "Latitude": "234.234",
                  "Longitude": "9845.34",
                  "Name": "Fairways"
                },
                "Email": "asdf@gmail.com",
                "AccountType": "driver"
              },
              "RideRiderDTO": {
                "Name": "Jim Bob",
                "PhoneNumber": "123-123-1234",
                "ApartmentDTO": {
                  "Latitude": "234.234",
                  "Longitude": "9845.34",
                  "Name": "Fairways"
                },
                "Email": "asdf@gmail.com",
                "AccountType": "rider"
              },
              "DepartureTime": "12/22/2016",
              "Capacity": 3,
              "CurrentlySeated": 1,
              "VehicleDTO": {
                "Make": "Ford",
                "Model": "Taurus",
                "LicensePlate": "123-ABC",
                "Color": "Green",
                "Capacity": 3
              },
              "TimeSpan": "08:00",
              "IsOnTime": true
            },
          }
        ]);
      }

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



