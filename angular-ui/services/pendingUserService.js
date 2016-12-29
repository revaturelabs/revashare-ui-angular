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

		function approveUser(username, successfulCallback, errorCallback) {
			var user = {
				UserName: username
			};

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

		function approveDriver(rider, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/approve-driver',
				data: rider,
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
					// errorCallback('error');
					// 
					// TODO: remove after service is fixed
					successfulCallback([
						{"Name":"john bob","PhoneNumber":"9876543210","Apartment":{"Latitude":"1.1","Longitude":"2.2","Name":"abc"},"Email":"a@b.c","ApartmentId":0,"Roles":[{"Type":"Rider"}],"UserName":"johnbob"}
					]);
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

		function demoteDriver(driver, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/admin/remove-driver-privileges',
				params: { username: driver },
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