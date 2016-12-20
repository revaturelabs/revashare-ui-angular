(function(ng) {
    var driverSchedule;
    var login;
    var message;
    var profile;
    var schedule;
    var signup;
    var user;
    var welcome;

    ng.module("revashare").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/welcome");

        $stateProvider
            .state("driverSchedule", driverSchedule)
            .state("login", login)
            .state("message", message)
            .state("profile", profile)
            .state("schedule", schedule)
            .state("signup", signup)
            .state("user", user)
            .state("welcome", welcome);

    }]);

    driverSchedule = {
        url: "/driver/schedule",
        views: {
            "main": {
                templateUrl: "routes/driver/schedule/index.html",
                controller: "driverScheduleCtrl",
                controllerAs: "vm"
            }
        }
    };

    welcome = {
        url: "/welcome",
        views: {
            "main": {
                templateUrl: "routes/welcome/index.html",
                controller: "welcome_controller",
                controllerAs: "vm"
            }
        }
    };

    signup = {
        url: "/signup",
        views: {
            "main": {
                templateUrl: "routes/signup/index.html",
                controller: "signup_controller",
                controllerAs: "vm"
            }
        }
    };

    login = {
        url: "/login",
        views: {
            "main": {
                templateUrl: "routes/login/index.html",
                controller: "login_controller",
                controllerAs: "vm"
            }
        }
    };

    profile = {
        url: "/profile",
        views: {
            "main": {
                templateUrl: "routes/profile/index.html",
                controller: "profile_controller",
                controllerAs: "vm"
            }
        }
    };

    schedule = {
        url: "/schedule",
        views: {
            "main": {
                templateUrl: "routes/schedule/index.html",
                controller: "schedule_controller",
                controllerAs: "vm"
            }
        }
    };

    user = {
        url: "/user",
        views: {
            "main": {
                templateUrl: "routes/user/index.html",
                controller: "user_controller",
                controllerAs: "vm"
            }
        }
    };

    message = {
        url: "/message",
        views: {
            "main": {
                templateUrl: "routes/message/index.html",
                controller: "message_controller",
                controllerAs: "vm"
            }
        }
    };
})(angular);