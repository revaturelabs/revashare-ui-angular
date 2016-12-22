(function() {
  angular.module("revashare")
  .service("serverDataService", function (REVASHARE_API_URL, $http) {
    this.upgradeToDriver = upgradeToDriver;
    this.viewProfile = viewProfile;
    this.updateProfile = updateProfile;    

    function upgradeToDriver (user, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: "/admin/upgradedriver",
        data: { 'key': user },
        cache: true
      })
      .then(function success(response) {
        successCallback(respondate.data);
      },
      function error(response) {
        errorCallback("error");
      });

      function viewProfile(successCallback, errorCallback) {
        $http({
          method: "GET",
          url: "/rider/viewprofile",
          cache: true
        })
        .then(function success(response) {
          successCallback(response.data);
        },
        function error(response) {
          errorCallback("error");
        });
      }

      function updateProfile(successCallback, errorCallback) {
        $http({
          method: "POST",
          url: "/rider/updateprofile",
          params: { name: name, number: number, apartment: apartment, email: email, vehicle: vehicle, accounttype: "rider" },
          cache: true
        })
        .then(function success(response) {
          successCallback(response.data);
        },
        function error(response) {
          errorCallback("error");
        });
      }
    }

  });
})();
