(function(ng) {
    ng.module("revashare")
    .service("commentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addComment;
        
        addComment = function(comment, successCallback, failureCallback) {
            $http.post(REVASHARE_API_URL + "flag", comment)
            .then(function(data) {
                successCallback();
            },
            function(data) {
                failureCallback();
            });
        };
      var listComments;

        listComments = function(successCallback,errorCallback){
      $http({
        method: "GET",
        url: "/flag/",
        cache: true
      })
        .then(function success(response) {
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