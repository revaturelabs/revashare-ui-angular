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
    this.getPendingRiders = getPendingRiders;
    this.approveRider = approveRider;

    var cache = {};

    function isInGroup(username, groups, callback) {
      var isIn = false;
      var userRole = "Guest";

      function check() {
        angular.forEach(groups, function(group) {
          if (group === userRole) {
            isIn = true;
          }
        });

        callback(isIn);
      }

      if (username !== false) {
        getUser(username, function(user) {
          userRole = user.Roles[0].Type;

          if (userRole == "RequestDriver") {
            userRole = "Rider";
          }

          check();
        }, function() {
          check();
        });
      }
      else {
        check();
      }
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

    function getPendingRiders(successCallback, failureCallback) {
      $http.get(REVASHARE_API_URL + "api/admin/get-pending-riders")
      .then(function(response) {
        successCallback(response.data);
      }, function(response) {
        failureCallback();
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

    function approveRider(username, successCallback, errorCallback) {
      var user = {
        UserName: username
      };

      $http.post(REVASHARE_API_URL + "api/admin/approve-user", user)
      .then(function(response) {
        successCallback();
      }, function(response) {
        failureCallback();
      });
    }

    function removeUser (username, successCallback, errorCallback) {
      var user = {
        UserName: username
      };

      $http.post(REVASHARE_API_URL + "api/admin/remove-rider", user)
      .then(function(response) {
        successCallback();
      }, function(response) {
        failureCallback();
      });
    }

	}]);
})();