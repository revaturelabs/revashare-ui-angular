(function() {
	angular.module('revashare')
	.service('userDataService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.addUser = adduser;
		this.modifyUser = modifyUser;
		this.removeUser = removeUser;

    function addUser (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: "/admin/adduser",
        data: { 'key': user },
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function modifyUser (successCallback, errorCallback) {
      $http({
        method: "POST",
        url: "/admin/modifyuser",
        data: { 'key': user },
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function removeUser (successCallback, errorCallback) {
      $http({
        method: "POST",
        url: "/admin/removeuser",
        data: { 'key': user },
        cache: false
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback
      });
    }

	}]);
})();