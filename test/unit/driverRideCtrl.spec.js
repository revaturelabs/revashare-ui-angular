describe("driverRideCtrl", function() {
    beforeEach(function() {
        module("revashare");
    });

    var $controller;

    beforeEach(function() {
        inject(function(_$controller_) {
            $controller = _$controller_;
        });
    });

    describe("vm.createRide", function() {
        var rides;

        beforeEach(function() {
            rides = [];
        });

        it("creates the ride if all inormation is present.", function() {
            var $stateParams = {
                toWork: true
            };

            var $cookies = {
                get: function(_) {
                    return "fred";
                }
            };

            var rideDataService = {
                createRide: function(ride) {
                    rides.push(ride);
                }
            };

            var dateService = {
                getThisWeeksDate: function() {
                    return new Date(2016, 12, 18);
                }
            };

            var driverRideCtrl = $controller("driverRideCtrl", {
                $stateParams: $stateParams,
                $cookies: $cookies,
                rideDataService: rideDataService,
                dateService: dateService
            });

            driverRideCtrl.data.departureTime = "08:15:00";
            driverRideCtrl.createRide();

            expect(rides.length).toEqual(1);

            var ride = rides[0];

            expect(ride.username).toEqual("fred");
            expect(ride.isToWork).toEqual(true);
            expect(ride.departureTime).toEqual("08:15:00");
            expect(ride.startOfWeekDate.getTime()).toEqual((new Date(2016, 12, 18)).getTime());
            expect(ride.isOnTime).toEqual(true);
        });
    });
});