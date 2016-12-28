(function(ng) {
    ng.module("revashare")
    .service("commentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addComment;
        
        addComment = function(comment, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "api/driver/reportrider", comment)
            .then(function(data) {
                console.log(data);
                successCallback(data);
            },
            function(data) {
                failureCallback(data);
            });
        };
      var listComments;

        listComments = function(successCallback,errorCallback){
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "driver/reportrider",
        cache: true
      })
        .then(function success(response) {
            console.log(response);
          successCallback(response.data);
        },
        function error(response) {
          errorCallback("error");
        });
    }

        this.addComment = addComment; 
        this.listComments = listComments;       
    }]);
})(angular);