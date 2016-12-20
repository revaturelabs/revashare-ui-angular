
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
        .state("car", car);

});


var welcome = {
    url: "/welcome",
    views: {
        "main": {
            templateUrl: "routes/welcome/index.html",
            controller: "welcome_controller",
            controllerAs: "vm"
        }
    }
}


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


var profile = {
    url: "/profile",
    views: {
        "main": {
            templateUrl: "routes/profile/index.html",
            controller: "profile_controller",
            controllerAs: "vm"
        }
    }
}


var schedule = {
    url: "/schedule",
    views: {
        "main": {
            templateUrl: "routes/schedule/index.html",
            controller: "schedule_controller",
            controllerAs: "vm"
        }
    }
}


var user = {
    url: "/user",
    views: {
        "main": {
            templateUrl: "routes/user/index.html",
            controller: "user_controller",
            controllerAs: "vm"
        }
    }
}


var message = {
    url: "/message",
    views: {
        "main": {
            templateUrl: "routes/message/index.html",
            controller: "message_controller",
            controllerAs: "vm"
        }
    }
}


var car = {
    url: "/car",
    views: {
        "main": {
            templateUrl: "routes/car/index.html",
            controller: "car_controller",
            controllerAs: "vm"
        }
    }
}