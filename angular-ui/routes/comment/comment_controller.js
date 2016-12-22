(function (ng) {
    ng.module("revashare")
        .controller("comment_controller", ["$stateParams", "$cookies", "commentDataService", function ($stateParams, $cookies, commentDataService) {
            var vm = this;

            vm.title = "Create Comment - " + ($stateParams.type ? "Complaint" : "Praise");
            vm.data = {};

            vm.addComment = function () {
                var comment = vm.data;
                comment.driver = driver;
                comment.rider = rider;
                comment.type = type;
                comment.description = description;


                if (comment.Description === null) {
                    return "Description cannot be empty.";
                }


                commentDataService.addComment(comment, function () {
                    // TODO: handle success
                    console.log("Comment created.");
                }, function () {
                    // TODO: handle failure
                    console.log("Comment not created.");
                });
            };


            commentDataService.listComments(
                function success(comments) {
                    vm.comments = comments;
                },
                function error() {
                    toastr.error("there was an error retrieving comment information");
                }
            );

        }]);
})(angular);

