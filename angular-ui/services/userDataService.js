(function(ng) {
    ng.module("revashare")
    .constant("ROLE", {
        "ADMIN": "admin",
        "UNASSIGNED": "unassigned",
        "RIDER": "rider",
        "DRIVER_REQUEST": "driverRequest",
        "DRIVER": "driver"
    })
    .service("userDataService", ["$http", "$cookies", "REVASHARE_API_URL" function($http, $cookies, REVASHARE_API_URL) {
        var data = {};

        this.getCurrentUser = function(successCallback, failureCallback) {
            if (data.user === undefined) {
                $http.get(REVASHARE_API_URL + "user/" + $cookies.get("username")).then(function(data) {
                    successCallback(data.user);
                },
                function(data) {
                    failureCallback();
                });
            }
            else {
                successCallback(data.user);
            }
        };
    }]);
})(angular);