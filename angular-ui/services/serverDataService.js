
(function () {
  angular.module("revashare")
  .constant("REVASHARE_API_URL", "http://ec2-34-193-194-23.compute-1.amazonaws.com/RevaShare-Logic/")
  .service("serverDataService", function (REVASHARE_API_URL, $http) {
    this.getAllUsers = getAllUsers;
    this.viewSchedules = viewSchedules;
    this.viewCarInfo = viewCarInfo;
    this.updateCarInfo = updateCarInfo;
    this.upgradeToDriver = upgradeToDriver;
    this.addCar = addCar;
    // this.listApartments = listApartments;
    // this.listFlags = listFlags;

    function getAllUsers (successCallback, errorCallback) {
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "api/admin/get-drivers",
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function addCar (car, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: REVASHARE_API_URL + "driver/addvehicle",
        data: { 'key': car },
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    // driver only
    function createSchedule (successCallback, errorCallback) {

    }

    // driver only
    function deleteSchedule (successCallback, errorCallback) {

    }

    function viewSchedules (successCallback, errorCallback) {
      $http({
        method: "GET",
        url: "/admin/viewschedules",
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function updateCarInfo (make, model, licensePlate, color, capacity, successCallback, errorCallback) {
      $http({
        method: "POST",
        url: "driver/updatevehicle",
        params: { make: make, mode: model, licensePlate: licensePlate, color: color, capacity: capacity },
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(reponse) {
        errorCallback("error");
      });
    }

    function viewCarInfo (successCallback, errorCallback) {
      $http({
        method: "GET",
        url: REVASHARE_API_URL + "driver/viewvehicle",
        params: { 'driver': "kimbob"},
        cache: true
      })
      .then(function success(response) {
        successCallback(response.data);
      },
      function error(response) {
        errorCallback("error");
      });
    }

    function subscribeSchedule (successCallback, errorCallback) {

    }

    function quitSchedule (successCallback, errorCallback) {

    }

    function getMySchedules (successCallback, errorCallback) {

    }

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
    }

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

      function subscribeSchedule(successCallback, errorCallback) {
        
      }
      
      function addComment (successCallback, errorCallback) {

      }

      function quitSchedule(successCallback, errorCallback) {
        
      }
      
      function listApartments(successCallback, errorCallback){

      }

      function addApartment(successCallback, errorCallback){

      }

    // function listFlags(successCallback,errorCallback){

    // }

  });

})();




/*
["Ride": {
"Driver": "User DTO",
"Riders": ["User DTO"],
"DepartureTime": "time",
"Capacity": "capacity",
"CurrentlySeated": "number of seats occupied",
"Vehicle": "Vehicle DTO"
},

"User": {
"Name": "name",
"PhoneNumber": "number",
"Apartment": "Apartment DTO",
"Email": "email address",
"Vehicle": "Vehicle DTO - this is an optional field",
"AccountType": "rider or driver"
},

"Location": {
"Latitude": "lat",
"Longitude": "long",
"ComplexName": "name of the complex"
}
]
*/




/*
public class ApartmentDTO{
    public string Latitude { get; set; }
    public string Longitude { get; set; }
    public string Name { get; set; }
}
public class FlagDTO{
  public string Type { get; set; }
  public string Message { get; set; }
  public string DriverId { get; set; }
  public string RiderId { get; set; }
  public UserDTO Driver { get; set; }
  public UserDTO Rider { get; set; }
}
public class RideDTO{      
    public DateTime StartOfWeekDate { get; set; }
    public TimeSpan DepartureTime { get; set; }
    public bool IsOnTime { get; set; }
    public virtual VehicleDTO Vehicle { get; set; }
    public int VehicleId { get; set; }
}
public class RideRiderDTO{
    public int RideId { get; set; }
    public int RiderId { get; set; }
    public bool Accepted { get; set; }
    public virtual RideDTO Ride { get; set; }
    public virtual UserDTO Rider { get; set; }
}
public class RoleDTO{
    public string Type { get; set; }
}
public class SeatDTO{
    public RideDTO ride { get; set; }
    public UserDTO rider { get; set; }
    public bool Accepted { get; set; }
}
public class UserDTO{
    public string Name { get; set; }
    public string PhoneNumber { get; set; }      
    public ApartmentDTO Apartment { get; set; }
    public string Email { get; set; }
    public int ApartmentId { get; set; }
}
public class UserInfoDTO{
      public string UserId { get; set; }
      public string ApartmentId { get; set; }
      public string Name { get; set; }
      public string Email { get; set; }
      public string Phone { get; set; }
      public UserDTO User { get; set; }
      public ApartmentDTO Apartment { get; set; }
}
public class VehicleDTO{
     public string Make { get; set; }
     public string Model { get; set; }
     public string LicensePlate { get; set; }
     public string Color { get; set; }
     public int Capacity { get; set; }
     public UserDTO Owner { get; set; }
     public int OwnerId { get; set; }
}
*/
