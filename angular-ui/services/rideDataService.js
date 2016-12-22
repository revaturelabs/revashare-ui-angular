(function(ng) {
    ng.module("revashare")
    .service("rideDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var createRide;
        var getRide;
        var getRiders;
        var approveRider;

        createRide = function(username, startOfWeekDate, departureTime, isAmRide, successCallback, failureCallback) {
            var ride = {
                StartOfWeekDate: startOfWeekDate,
                DepartureTime: departureTime,
                IsOnTime: true,
                Vehicle: {
                    Owner: {
                        UserName: username
                    }
                },
                IsAMRide: isAmRide
            };

            console.log(ride);

            $http.post(REVASHARE_API_URL + "api/driver/scheduleride", ride)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                console.log(response);
                failureCallback();
            });
        };

        getRide = function(username, startOfWeekDate, isAmRide, successCallback, failureCallback) {
            var ride = {
                StartOfWeekDate: startOfWeekDate,
                Vehicle: {
                    Owner: {
                        UserName: username
                    }
                },
                IsAMRide: isAmRide
            };

            console.log(ride);

            $http.post(REVASHARE_API_URL + "api/driver/getRide", ride)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

        getRiders = function(username, startOfWeekDate, isAmRide, successCallback, failureCallback) {
            var ride = {
                StartOfWeekDate: startOfWeekDate,
                Vehicle: {
                    Owner: {
                        UserName: username
                    }
                },
                IsAMRide: isAmRide
            };

            $http.post(REVASHARE_API_URL + "api/driver/viewpassengers", ride)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

        approveRider = function(driver, startOfWeekDate, isAmRide, rider, successCallback, failureCallback) {
            var rideRider = {
                Ride: {
                    StartOfWeekDate: startOfWeekDate,
                    Vehicle: {
                        Owner: {
                            UserName: driver
                        }
                    },
                    IsAMRide: isAmRide
                },
                Rider: {
                    UserName: rider
                }
            };

            $http.put(REVASHARE_API_URL + "api/driver/acceptpassenger", rideRider)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        }

        this.createRide = createRide;
        this.getRide = getRide;
        this.getRiders = getRiders;
        this.approveRider = approveRider;
    }]);
})(angular);