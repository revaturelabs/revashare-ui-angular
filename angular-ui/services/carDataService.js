(function() {
	angular.module("revashare")
	.service('carDataService', ['$http', 'REVASHARE_API_URL', function ($http, REVASHARE_API_URL) {		
		this.addCar = addCar;    
		this.viewCarInfo = viewCarInfo;
		this.updateCarInfo = updateCarInfo;

		function addCar (car, successCallback, errorCallback) {
			$http({
				method: "POST",
				url: REVASHARE_API_URL + "api/driver/addvehicle",
				data: car,
				cache: true
			})
			.then(function success(response) {
				successCallback(response.data);
			},
			function error(response) {
				errorCallback("error");
			});
		}

		function updateCarInfo (car, successCallback, errorCallback) {
			$http({
				method: "POST",
				url: REVASHARE_API_URL + "api/driver/updatevehicle",
				data: car,
				cache: true
			})
			.then(function success(response) {
				successCallback(response.data);
			},
			function error(reponse) {
				errorCallback("error");
			});
		}

		function viewCarInfo (driver, successCallback, errorCallback) {
			$http({
				method: "GET",
				url: REVASHARE_API_URL + "api/driver/viewvehicle",
				params: { 'driver': driver },
				cache: true
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