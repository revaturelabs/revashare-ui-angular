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

            $http.post(REVASHARE_API_URL + "driver/scheduleride", ride)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

        getRide = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
            $http.get(REVASHARE_API_URL + "ride?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

        getRiders = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
            $http.get(REVASHARE_API_URL + "rider?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };

        approveRider = function(driver, startOfWeekDate, isToWork, rider, successCallback, failureCallback) {
            var rideRider = {
                ride: {
                    driver: driver,
                    startOfWeekDate: startOfWeekDate,
                    isToWork: isToWork
                },
                rider: rider
            };

            $http.put(REVASHARE_API_URL + "rider", rideRider)
            .then(function(response) {
                successCallback();
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