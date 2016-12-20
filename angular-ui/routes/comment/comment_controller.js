




angular.module("revashare").controller("comment_controller", function (serverDataService) {
    var vm = this;
    
    vm.addComment = addComment;

    function addComment () {
        this.addComment = addComment;
        addComment(vm.addComment.Driver, vm.addComment.Rider, vm.addComment.Type, vm.addComment.Description, 
            function success (response) {
                console.log("comment added successfully");
                toastr.success("comment added successfully");
            },
            function error () {
                console.log("error creating comment");
                toastr.error("error creating comment");
            });
    }
    vm.comments = [];
    function listFlags(successCallback, errorCallback) {

        successCallback([
            {
             "FlagDTO":{   
                    "Driver": "Matt O'Brien",
                    "Rider": "David Towson",
                    "Type": "Complaint",
                    "Description": "Always late and drives like a grandma!"
                    }
            },
            {
                "FlagDTO":{ 
                    "Driver": "Matt O'Brien",
                    "Rider": "David Towson",
                    "Type": "Complaint",
                    "Description": "Extremely late and ran over my grandma!"
                }
            }
        ]);
    }

   
    listFlags(
        function success(comments) {
            vm.comments = comments;
        },
        function error() {
            toastr.error("there was an error retrieving comment information");
        }
    )
    // function typeList(types){
    //         availableOptions: [
    //   {id: '1', name: 'Option A'},
    //   {id: '2', name: 'Option B'},
    //   {id: '3', name: 'Option C'}
    // ],
    // selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
    // };

    // }


  
    

});

