
require("Sass/style.scss");


var angular = require("angular");
require("angular-ui-router");
require("ng-cookies")


var app = angular.module("revashare", [
    "ui.router",
    "ngCookies"
]);


// services
require("Services/serverDataService");
require("Services/uiController");

// components
require("Components/navbar/navbar_component");
require("Components/sidebar/sidebar_component");

// controllers
require("Routes/welcome/welcome_controller");

// routing
require("Src/routing");
