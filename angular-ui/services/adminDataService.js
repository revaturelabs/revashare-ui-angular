(function() {
	angular.module('revashare')
	.service('adminDataService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.addAdmin = addAdmin;
		this.getAdmin = getAdmin;
		this.getAdmins = getAdmins;
		this.updateAdmin = updateAdmin;
		this.removeAdmin = removeAdmin;

		function addAdmin(admin, password, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/add-admin',
				data: admin,
				params: { 'password': password },
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error() {
					errorCallback('error');
				});
		}

		function getAdmin(username, successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/admin/get-admin',
				params: { 'username': username },
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error() {
					errorCallback('error');
				});
		}

		function getAdmins(successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/admin/get-admins',
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error() {
					errorCallback('error');
				});
		}

		function updateAdmin(admin, successfulCallback, errorCallback) {
			$http({
				method: 'PUT',
				url: REVASHARE_API_URL + 'api/admin/update-admin',
				data: admin,
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error() {
					errorCallback('error');
				});
		}

		function removeAdmin(admin, successfulCallback, errorCallback) {
			$http({
				method: 'PUT',
				url: REVASHARE_API_URL + 'api/admin/remove-admin',
				data: admin,
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error() {
					errorCallback('error');
				});
		}

	}]);
})();