
require("./sidebar_controller");

angular.module("revashare").component("sidebar", {
  template: require("./index.html"),
  controller: "sidebar_controller",
  controllerAs: "vm"
});