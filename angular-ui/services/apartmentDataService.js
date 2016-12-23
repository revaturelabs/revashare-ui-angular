(function(ng) {
    ng.module("revashare")
    .service("apartmentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addApartment;
        var listApartments;
        
        addApartment = function(apartment, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "apartment", apartment)
            .then(function(data) {
                successCallback();
            },
            function(data) {
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
        }

        this.addApartment = addApartment;    
        this.listApartments = listApartments;    
    }]);
})(angular);