(function(ng) {
    ng.module("revashare")
    .service("apartmentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addApartment;
        var listApartments;
        
        addApartment = function(Name, Latitude, Longitude, successCallback, failureCallback) {
            var apartment = {
                Name: Name,
                Latitude: Latitude,
                Longitude: Longitude
            };

            $http.post(REVASHARE_API_URL + "api/admin/add-apartment", apartment)
            .then(function(response) {
                successCallback(response.data);
            },
            function(response) {
                failureCallback();
            });
        };      

        listApartments = function(successCallback, failureCallback) {
            $http.get(REVASHARE_API_URL + "api/user/get-apartments")
            .then(function(response) {
                successCallback(response.data);
            }, function(response) {
                failureCallback();
            });
        };

        this.addApartment = addApartment;    
        this.listApartments = listApartments;    
    }]);
})(angular);