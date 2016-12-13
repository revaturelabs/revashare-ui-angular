
require("Sass/style.scss");


var angular = require("angular");
require("angular-ui-router");
require("angular-animate");
require("angular-aria");
require("angular-material");


var app = angular.module("revashare", [
    "ui.router", 
    "ngAnimate", 
    "ngAria", 
    "ngMaterial"
]);


require("Routes/welcome/welcome_controller");
require("Services/serverDataService");

require("Src/routing");
