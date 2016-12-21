(function(ng) {
    ng.module("revashare")
    .service("rideDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var createRide;
        var getRide;
        var getRiders;

        createRide = function(ride, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "ride", ride)
            .then(function(data) {
                successCallback();
            },
            function(data) {
                failureCallback();
            });
        };

        getRide = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
            $http.get(REVASHARE_API_URL + "ride?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
            .then(function(data) {
                successCallback(data);
            },
            function(data) {
                failureCallback();
            });
        };

        getRiders = function(username, startOfWeekDate, isToWork, successCallback, failureCallback) {
            $http.get(REVASHARE_API_URL + "rider?username=" + username + "&startOfWeekDate=" + startOfWeekDate + "&isToWork=" + isToWork)
            .then(function(data) {
                successCallback(data);
            },
            function(data) {
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
            .then(function(data) {
                successCallback();
            },
            function(data) {
                failureCallback();
            });
        }

        this.createRide = createRide;
        this.getRide = getRide;
    }]);
})(angular);