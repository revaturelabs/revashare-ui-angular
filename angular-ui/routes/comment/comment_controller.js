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





// angular.module("revashare").controller("comment_controller", function (commentDataService) {
//     var vm = this;

//     // vm.addComment = addComment;

//     function addComment () {
//         this.addComment = addComment;
//         commentDataService.addComment(vm.addComment.Driver, vm.addComment.Rider, vm.addComment.Type, vm.addComment.Description, 
//             function success (response) {
//                 console.log("comment added successfully");
//                 toastr.success("comment added successfully");
//             },
//             function error () {
//                 console.log("error creating comment");
//                 toastr.error("error creating comment");
//             });
//     }
//     vm.comments = [];
//     function listComments(successCallback, errorCallback) {

        // successCallback([
        //     {               
        //             "driver": "Matt O'Brien",
        //             "rider": "David Towson",
        //             "type": "Complaint",
        //             "description": "Always late and drives like a grandma!"                   
        //     },
        //     {                
        //             "driver": "Matt O'Brien",
        //             "rider": "David Towson",
        //             "type": "Complaint",
        //             "description": "Extremely late and ran over my grandma!"               
        //     }
        // ]);
//     }


//     commentDataService.listComments(
//         function success(comments) {
//             vm.comments = comments;
//         },
//         function error() {
//             toastr.error("there was an error retrieving comment information");
//         }
//     )    
// });

