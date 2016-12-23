(function() {
	angular.module('revashare')
	.service('userDataService', ['$http', '$state', 'REVASHARE_API_URL', function($http, $state, REVASHARE_API_URL) {
		this.addUser = addUser;
    this.getDrivers = getDrivers;
    this.getRiders = getRiders;
		this.modifyUser = modifyUser;
		this.removeUser = removeUser;
    this.isInGroup = isInGroup;
    this.redirectIfNotInGroup = redirectIfNotInGroup;

    function isInGroup(username, groups) {
      var isIn = false;
      var userRole = "Guest";

      if (username !== false) {
        //userRole = getUser(username).Roles[0].Type;
        userRole = "Rider";
      }

      angular.forEach(groups, function(group) {
        console.log(group + " === " + userRole);
        if (group === userRole) {
          isIn = true;
        }
      });

      return isIn;
    }

    function redirectIfNotInGroup(username, groups, redirectState, redirectParams) {
      if (redirectState === undefined) {
        redirectState = "welcome";
      }

      if (redirectParams === undefined) {
        redirectParams = {};
      }

      if (!isInGroup(username, groups)) {
        $state.go(redirectState, redirectParams);
        return true;
      }

      return false;
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