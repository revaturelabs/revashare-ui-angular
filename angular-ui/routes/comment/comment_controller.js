




angular.module("revashare").controller("comment_controller", function (serverDataService) {
     var vm = this;
     vm.comments = [];

function listFlags (successCallback, errorCallback) {

        successCallback([
            {
                "FlagDTO": {
                "Driver": "Matt O'Brien",
                "Rider": "David Towson",
                "Type": "Complaint",
                 "Description": "Always late and drives like a grandma!"
                }    
            },
            {
                 "FlagDTO": {
                "Driver": "Matt O'Brien",
                "Rider":"David Towson",                            
                "Type": "Complaint",
                 "Description": "Extremely late and ran over my grandma!"
            }
            }
        ]);
     }


   listFlags(
        function success (comments) {
            vm.comments = comments;
        },
        function error () {
            toastr.error("there was an error retrieving comment information");
        }
    )

});