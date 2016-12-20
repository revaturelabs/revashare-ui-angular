
(function(ng) {
    angular.module("revashare").config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/welcome");

        $stateProvider
            .state("driverRideCreate", driverRideCreate)
            .state("login", login)
            .state("message", message)
            .state("profile", profile)
            .state("schedule", schedule)
            .state("signup", signup)
            .state("user", user)
            .state("welcome", welcome);
    });

    var driverRideCreate = {
        url: "/driver/ride/new",
        views: {
            "main": {
                templateUrl: "routes/driver/ride/new.html",
                controller: "driverRideCtrl",
                controllerAs: "vm"
            }
        }
    };

    var login = {
        url: "/login",
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
})(angular);