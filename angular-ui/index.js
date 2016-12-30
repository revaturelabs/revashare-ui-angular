
var app = angular.module("revashare", [
	"ui.router",
	"ngCookies"
	])
.constant("REVASHARE_API_URL", "http://54.145.144.187/revashare-api/")
.config(["$httpProvider", function($httpProvider)
{$httpProvider.defaults.withCredentials = true}]);

