
require("./navbar_controller");

angular.module("revashare").component("navbar", {
  template: require("./index.html"),
  controller: "navbar_controller",
  controllerAs: "vm"
});