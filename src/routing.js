
//require("Src/index.js");

angular.module("revashare").config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise("/welcome");

    $stateProvider
        .state("welcome", welcome)
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