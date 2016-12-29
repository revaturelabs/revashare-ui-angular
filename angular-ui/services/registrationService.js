(function() {
	angular.module('revashare')
	.service('registrationService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.signUp = signUp;

		function signUp(user, password, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/signup',
				data: { user: user, password: password },
				cache: true
			})
			.then(
				function success(response) {
					successfulCallback(response.data);
				},
				function error(response) {
					errorCallback('error');
				});
		}

	}])
})();