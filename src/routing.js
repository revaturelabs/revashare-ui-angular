
angular.module("revashare").config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/welcome");

    $stateProvider
        .state("welcome", welcome)
        
        .state("signup", signup)
        .state("login", login)
        .state("profile", profile)

        .state("schedule", schedule)
        .state("user", user)
        .state("message", message);

});


var welcome = {
    url: "/welcome",
    views: {
        "main": {
            template: require("Routes/welcome/index.html"),
            controller: "welcome_controller",
            controllerAs: "vm"
        }
    }
}


var signup = {
    url: "/signup",
    views: {
        "main": {
            template: require("Routes/signup/index.html"),
            controller: "signup_controller",
            controllerAs: "vm"
        }
    }
};


var login = {
    url: "/login",
    views: {
        "main": {
            template: require("Routes/login/index.html"),
            controller: "login_controller",
            controllerAs: "vm"
        }
    }
};


var profile = {
    url: "/profile",
    views: {
        "main": {
            template: require("Routes/profile/index.html"),
            controller: "profile_controller",
            controllerAs: "vm"
        }
    }
}


var schedule = {
    url: "/schedule",
    views: {
        "main": {
            template: require("Routes/schedule/index.html"),
            controller: "schedule_controller",
            controllerAs: "vm"
        }
    }
}


var user = {
    url: "/user",
    views: {
        "main": {
            template: require("Routes/user/index.html"),
            controller: "user_controller",
            controllerAs: "vm"
        }
    }
}


var message = {
    url: "/message",
    views: {
        "main": {
            template: require("Routes/message/index.html"),
            controller: "message_controller",
            controllerAs: "vm"
        }
    }
}