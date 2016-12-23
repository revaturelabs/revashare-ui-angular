(function() {
	angular.module('revashare')
	.service('userDataService', ['$http', '$state', '$cookies', 'REVASHARE_API_URL', function($http, $state, $cookies, REVASHARE_API_URL) {
		this.addUser = addUser;
    this.getDrivers = getDrivers;
    this.getRiders = getRiders;
		this.modifyUser = modifyUser;
		this.removeUser = removeUser;
    this.isInGroup = isInGroup;
    this.redirectIfNotInGroup = redirectIfNotInGroup;

    var cache = {};

    function isInGroup(groups) {
      var isIn = false;
      var user = getLoggedInUser();
      var userRole = user.Roles[0].Name;

      angular.forEach(groups, function(group) {
        if (group === userRole) {
          isIn = true;
        }
      });

      return isIn;
    }

    function redirectIfNotInGroup(groups, redirectState, redirectParams) {
      if (redirectParams === undefined) {
        redirectParams = {};
      }

      if (!isInGroup(groups)) {
        $state.go(redirectState, redirectParams);
      }
    }

    function getLoggedInUser() {
      if (cache.loggedInUsername !== $cookies.getObject("username")) {
        cache.loggedInUsername = $cookies.getObject("username")
        cache.loggedInUser = getUser(cache.loggedInUsername);
      }

      return cache.loggedInUser;
    }

    function addUser (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "api/admin/adduser",
        data: user,
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function getDrivers (successCallback, errorCallback) {
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "api/admin/get-drivers",
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function getRiders (successCallback, errorCallback) {
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "api/admin/get-riders",
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function modifyUser (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "api/admin/modifyuser",
        data: user,
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function removeUser (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "api/admin/removeuser",
        data: user,
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

	}]);
})();