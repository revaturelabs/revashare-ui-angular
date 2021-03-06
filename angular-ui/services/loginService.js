(function() {
	angular.module('revashare')
	.service('loginService', ['$http', 'REVASHARE_API_URL', 'userDataService', function($http, REVASHARE_API_URL, userDataService) {
		this.login = login;
		this.logout = logout;

		function login(username, password, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/login',
				data: { 'userName': username, 'password': password },
				cache: true
			})
			.then(function success(response) {
				userDataService.getUser(username, function(user) {
					successfulCallback(user);
				}, function() {
					logout(errorCallback, errorCallback);
				});
			},
			function error(response) {
				errorCallback('error');
			});
		}

		function logout(successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/logout',
				cache: true
			})
			.then(function success(response) {
				successfulCallback();
			},
			function error(response) {
				errorCallback('error');
			});
		}

		function recoverPassword(username, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/recover',
				data: username,
				cache: true
			})
			.then(function success(response) {
				successfulCallback(response.data);
			},
			function error() {
				errorCallback('error');
			});
		}

	}]);
})();