(function(ng) {
    ng.module("revashare")
    .service("apartmentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addApartment;
        
        addApartment = function(apartment, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "api/apartment", apartment)
            .then(function(data) {
                successCallback();
            },
            function(data) {
                failureCallback();
            });
        };
      
      function listApartments(successCallback, errorCallback){
      $http({
        method: "GET",
        url: "/api/user/get-apartment/",
        cache: true
      })
        .then(function success(response) {
          successCallback(response.data);
        },
        function error(response) {
          errorCallback("error");
        });
    }


        this.addApartment = addApartment;    
        this.listApartments = listApartments;    
    }]);
})(angular);