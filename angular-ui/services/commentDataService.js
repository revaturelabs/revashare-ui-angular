(function(ng) {
    ng.module("revashare")
    .service("commentDataService", ["$http", "REVASHARE_API_URL", function($http, REVASHARE_API_URL) {
        var addComment;
        
        addComment = function(comment, successCallback, failureCallback) {
            $http.post("http://ec2-34-193-194-23.compute-1.amazonaws.com/revashare-logic/api/" + "driver/reportrider", comment)
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
        url: "http://ec2-34-193-194-23.compute-1.amazonaws.com/revashare-logic/api/driver/reportrider",
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