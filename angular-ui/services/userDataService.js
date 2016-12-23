(function() {
	angular.module('revashare')
	.service('userDataService', ['$http', '$state', 'REVASHARE_API_URL', function($http, $state, REVASHARE_API_URL) {
		this.addUser = addUser;
    this.getDrivers = getDrivers;
    this.getRiders = getRiders;
		this.modifyUser = modifyUser;
		this.removeUser = removeUser;
    this.isInGroup = isInGroup;
    this.getUser = getUser;

    var cache = {};

    function isInGroup(role, groups, callback) {
      var isIn = false;

      angular.forEach(groups, function(group) {
        if (group === role) {
          isIn = true;
        }
      });

      return role;
    }

    function getUser(username, successCallback, failureCallback) {
      if (cache[username] === undefined) {
        $http.get(REVASHARE_API_URL + "api/user/get-user?username=" + username)
        .then(function(response) {
          cache[username] == response.data;
          successCallback(response.data);
        }, function(response) {
          failureCallback();
        });
      }
      else {
        successCallback(cache[username]);
      }
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
      function error() {
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