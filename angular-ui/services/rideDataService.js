(function(ng) {
    ng.module("revashare")
    .service("rideDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var createRide;
        var getRide;

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
                
            },
            function(data) {
                failureCallback();
            });
        };

        this.createRide = createRide;
        this.getRide = getRide;
    }]);
})(angular);