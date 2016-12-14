
require("Sass/style.scss");


var angular = require("angular");
require("angular-ui-router");
require("angular-animate");
require("angular-aria");

require("angular-material/angular-material.scss");
require("angular-material");


var app = angular.module("revashare", [
    "ui.router", 
    "ngAnimate", 
    "ngAria", 
    "ngMaterial"
]);


require("Components/navbar/navbar_component");
require("Components/sidebar/sidebar_component");

require("Routes/welcome/welcome_controller");
require("Services/serverDataService");

require("Src/routing");
