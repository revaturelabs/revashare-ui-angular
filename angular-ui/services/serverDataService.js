(function() {
  angular.module("revashare")
  .service("serverDataService", function (REVASHARE_API_URL, $http) {
    this.upgradeToDriver = upgradeToDriver;
    this.viewProfile = viewProfile;
    this.updateProfile = updateProfile;

    function upgradeToDriver (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "api/admin/upgradedriver",
        data: user,
        cache: true
      })
      .then(function success(response) {
        successCallback(respondate.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function viewProfile(rider, successCallback, errorCallback) {
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "api/rider/viewprofile",
        params: { 'rider': rider },
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function updateProfile(user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "api/rider/updateprofile",
        data: user,
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }
  });
})();
