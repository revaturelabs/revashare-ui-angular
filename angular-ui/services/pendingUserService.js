(function () {
	angular.module('revashare')
	.service('pendingUserService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.approveUser = approveUser;
		this.approveDriver = approveDriver;
		this.getPendingDrivers = getPendingDrivers;
		this.getPendingUsers = getPendingUsers;
		this.getUserComments = getUserComments;
		this.removeComment = removeComment;
		this.demoteDriver = demoteDriver;

		function approveUser(user, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/approve-user',
				data: user,
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

		function approveDriver(driver, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/approve-driver',
				data: driver,
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

		function getPendingDrivers(successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/admin/get-pending-drivers',
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

		function getPendingUsers(successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/admin/get-pending-users',
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

		function getUserComments(successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/admin/get-user-reports',
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

		function removeComment(comment, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/remove-report',
				data: comment,
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

		function demoteDriver(comment, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/remove-driver-privileges',
				data: comment,
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