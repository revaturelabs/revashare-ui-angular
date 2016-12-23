(function() {
	angular.module('revashare')
	.service('registrationService', ['$http', 'REVASHARE_API_URL', function($http, REVASHARE_API_URL) {
		this.signUp = signUp;

		function signUp(user, successfulCallback, errorCallback) {
			$http({
				method: 'POST',
				url: REVASHARE_API_URL + 'api/account/signup',
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

	}])
})();