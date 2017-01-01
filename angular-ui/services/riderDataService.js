(function(ng) {
    ng.module("revashare")
    .service("riderDataService", ['$http', 'REVASHARE_API_URL', 'userDataService', function($http, REVASHARE_API_URL, userDataService) {
        var requestDriver;

        requestDriver = function(vehicle, username, successCallback, failureCallback) {
            userDataService.getUser(username, function(user) {
                vehicle.Owner = user;

                $http.post(REVASHARE_API_URL + "api/rider/driverUpgrade", vehicle)
                .then(function(response) {
                    successCallback();
                }, function(response) {
                    failureCallback();
                });
            }, function() {
                failureCallback();
            })
        };

        this.requestDriver = requestDriver;
    }]);
})(angular);