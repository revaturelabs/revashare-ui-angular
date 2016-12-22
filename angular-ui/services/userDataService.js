(function() {
	angular.module('revashare')
	.service('userDataService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.addUser = addUser;
    this.getAllUsers = getAllUsers;
		this.modifyUser = modifyUser;
		this.removeUser = removeUser;

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

    function getAllUsers (successCallback, errorCallback) {
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