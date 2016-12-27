(function(ng) {
    angular.module("revashare").config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/welcome");

        $stateProvider
            .state("welcome", welcome)

            .state("signup", signup)
            .state("login", login)
            .state("profile", profile)

            .state("schedule", schedule)
            .state("user", user)
            .state("message", message)
      
            .state("driverRideIndex", driverRideIndex)
            .state("driverRideCreate", driverRideCreate)
            .state("driverRideShow", driverRideShow)

            .state("viewRides", viewRides)
            .state("requestRide", requestRide)
            .state("riderRideShow", riderRideShow)

            .state("userProfileIndex", userProfileIndex)
            .state("userProfileEdit", userProfileEdit)

            .state("comment", comment)
            .state("addComment", addComment)
            .state("apartment", apartment)
            .state("addApartment", addApartment)

            .state("car", car);
    })
    .run(["$state", "$rootScope", "displayStateService", "userDataService", function($state, $rootScope, displayStateService) {
        $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            var roles;

            if (toState.data !== undefined) {
                roles = toState.data.allowedRoles;
            }

            if (roles === undefined) {
                roles = [ "Guest", "Unassigned", "Rider", "Driver", "Admin" ];
            }

            if (!displayStateService.isInGroup(displayStateService.role, roles)) {
                event.preventDefault();
                $state.go("welcome");
            }
        });
    }]);

    var driverRideIndex = {
        url: "/driver/ride",
        data: {
            action: "index",
            allowedRoles: [ "Driver" ]
        },
        views: {
            "main": {
                templateUrl: "routes/driver/ride/index.html",
                controller: "driverRideCtrl",
                controllerAs: "vm"
            }
        }
    };

    var driverRideCreate = {
        url: "/driver/ride/new",
        params: {
            toWork: true
        },
        data: {
            action: "create",
            allowedRoles: [ "Driver" ]
        },
        views: {
            "main": {
                templateUrl: "routes/driver/ride/new.html",
                controller: "driverRideCtrl",
                controllerAs: "vm"
            }
        }
    };         

    var driverRideShow = {
        url: "/driver/ride/show",
        params: {
            toWork: true
        },
        data: {
            action: "show",
            allowedRoles: [ "Driver" ]
        },
        views: {
            "main": {
                templateUrl: "routes/driver/ride/show.html",
                controller: "driverRideCtrl",

                controllerAs: "vm"
            }
        }
    };
   

    var userProfileIndex = {
        url: "/user/profile",
        params: {
            username: null
        },

        data: {
            action: "index",
            allowedRoles: [ "Unassigned", "Rider", "Driver", "Admin" ]
        },
        views: {
            "main": {                
                templateUrl: "routes/user/profile/index.html",
                controller: "userProfileCtrl",
                controllerAs: "vm"
            }
        }
    };

    var userProfileEdit = {
        url: "/user/profile/edit",
        data: {
            action: "edit",
            allowedRoles: [ "Unassigned", "Rider", "Driver", "Admin" ]
        },
        views: {
            "main": {
                templateUrl: "routes/user/profile/edit.html",
                controller: "userProfileCtrl",
                controllerAs: "vm"
            }
        }
    };

    var viewRides = {
        url:  "/rider/ride/index",
         data: {
            action: "index"
        },
        views: {
            "main": {

                templateUrl: "routes/rider/ride/index.html",
                controller: "riderRideController",
                controllerAs: "vm"
            }
        }
    };

    var requestRide = {
        url: "/rider/ride/listOpen",
        params: {
            toWork: true
        },
        data: {
            action: "create"
        },
        views: {
            "main": {
                templateUrl: "routes/rider/ride/listOpen.html",
                controller: "riderRideController",
                controllerAs: "vm"
            }
        }
    };

    var riderRideShow = {
        url: "/rider/ride/show",
        params: {
            toWork: true
        },
        data: {
            action: "show"
        },
        views: {
            "main": {
                templateUrl: "routes/rider/ride/show.html",
                controller: "riderRideController",
                controllerAs: "vm"
            }
        }
    };

    var login = {
        url: "/login",
        data: {
            allowedRoles: [ "Guest" ]
        },
        views: {
            "main": {
                templateUrl: "routes/login/index.html",
                controller: "login_controller",
                controllerAs: "vm"
            }
        }
    };

    var message = {
        url: "/message",
        views: {
            "main": {
                templateUrl: "routes/message/index.html",
                controller: "message_controller",
                controllerAs: "vm"
            }
        }
    };

    var profile = {
        url: "/profile",
        views: {
            "main": {
                templateUrl: "routes/profile/index.html",
                controller: "profile_controller",
                controllerAs: "vm"
            }
        }
    };

    var schedule = {
        url: "/schedule",
        views: {
            "main": {
                templateUrl: "routes/schedule/index.html",
                controller: "schedule_controller",
                controllerAs: "vm"
            }
        }
    };

    var signup = {
        url: "/signup",
        views: {
            "main": {
                templateUrl: "routes/signup/index.html",
                controller: "signup_controller",
                controllerAs: "vm"
            }
        }
    };

    var user = {
        url: "/user",
        views: {
            "main": {
                templateUrl: "routes/user/index.html",
                controller: "user_controller",
                controllerAs: "vm"
            }
        }
    };

    var welcome = {
        url: "/welcome",
        views: {
            "main": {
                templateUrl: "routes/welcome/index.html",
                controller: "welcome_controller",
                controllerAs: "vm"
            }
        }
    };
  
    var comment = {
        url: "/comment",
        views: {
            "main": {
                templateUrl: "routes/comment/index.html",
                controller: "comment_controller",
                controllerAs: "vm"
            }
        }
    };

    var addComment = {
        url: "/addComment",
        views: {
            "main": {
                templateUrl: "routes/comment/add.html",
                controller: "comment_controller",
                controllerAs: "vm"
            }
        }
    };

    var apartment = {
        url: "/apartment",
        views: {
            "main": {
                templateUrl: "routes/apartment/index.html",
                controller: "apartment_controller",
                controllerAs: "vm"
            }
        }
    };

    var addApartment = {
        url: "/addApartment",
        views: {
            "main": {
                templateUrl: "routes/apartment/add.html",
                controller: "apartment_controller",
                controllerAs: "vm"
            }
        }
    };


    var car = {
        url: "/car",
        views: {
            "main": {
                templateUrl: "routes/car/index.html",
                controller: "car_controller",
                controllerAs: "vm"
            }
        }
    };
})(angular);