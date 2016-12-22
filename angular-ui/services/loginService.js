(function() {
	angular.module('revashare')
	.service('loginService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.login = login;

		function login(email, username, password, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/login',
				params: { 'email': email, 'userName': username, 'password': password },
				cache: true
			})
			.then(function success(resposne) {
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
			funciton error(response) {
				errorCallback('error');
			});
		}
		
	}]);
})();