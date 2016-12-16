
require("./navbar_controller");

angular.module("revashare").component("navbar", {
  templateUrl: "components/navbar/index.html",
  controller: "navbar_controller",
  controllerAs: "vm"
});