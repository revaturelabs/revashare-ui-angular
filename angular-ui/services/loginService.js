(function() {
	angular.module('revashare')
	.service('loginService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
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
				successfulCallback(response.data);
			},
			function error(response) {
				errorCallback('error');
			});
		}

		function logout(successfulCallback, errorCallback) {
			$http({
				method: 'GET',
				url: REVASHARE_API_URL + 'api/account/logout',
				cache: true
			})
			.then(function success(response) {

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