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
    this.getUser = getUser;

    function isInGroup(username, groups) {
      var isIn = false;
      var userRole = "Guest";

      if (username !== false) {
        userRole = getUser(username).Roles[0].Type;
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

    function getUser(username, successCallback, failureCallback) {
      $http.get(REVASHARE_API_URL + "api/user/get-user?username=" + username)
      .then(function(response) {
        successCallback(response.data);
      }, function(response) {
        failureCallback();
      });
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

    function modifyUser (username, name, email, phoneNumber, apartmentName, successCallback, errorCallback) {
      var user = {
        UserName: username,
        Name: name,
        Email: email,
        PhoneNumber: phoneNumber,
        Apartment: {
          Name: apartmentName
        }
      };

      $http.post(REVASHARE_API_URL + "api/rider/save-user", user)
      .then(function(response) {
        successCallback(response.data);
      }, function(response) {
        failureCallback();
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