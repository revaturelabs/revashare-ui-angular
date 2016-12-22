(function() {
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
                var $state = {
                    current: {
                        data: {
                            action: "create"
                        }
                    }
                };

                var $stateParams = {
                    toWork: true
                };

                var $cookies = {
                    getObject: function(_) {
                        return "fred";
                    }
                };

                var rideDataService = {
                    createRide: function(username, startOfWeekDate, departureTime, isAmRide) {
                        rides.push({
                            StartOfWeekDate: startOfWeekDate,
                            DepartureTime: departureTime,
                            IsOnTime: true,
                            Vehicle: {
                                Owner: {
                                    UserName: username
                                }
                            },
                            IsAMRide: isAmRide
                        });
                    }
                };

                var dateService = {
                    getThisWeeksDate: function() {
                        return new Date(2016, 12, 18);
                    },
                    dateToString: function() {
                        return "2016-12-18T00:00:00";
                    }
                };

                var driverRideCtrl = $controller("driverRideCtrl", {
                    $state: $state,
                    $stateParams: $stateParams,
                    $cookies: $cookies,
                    rideDataService: rideDataService,
                    dateService: dateService
                });

                driverRideCtrl.data.departureTime = "08:15:00";
                driverRideCtrl.createRide();

                expect(rides.length).toEqual(1);

                var ride = rides[0];

                expect(ride.Vehicle.Owner.UserName).toEqual("fred");
                expect(ride.IsAMRide).toEqual(true);
                expect(ride.DepartureTime).toEqual("08:15:00");
                expect(ride.StartOfWeekDate).toEqual("2016-12-18T00:00:00");
                expect(ride.IsOnTime).toEqual(true);
            });
        });

        describe("vm.toWorkRideExists", function() {
            var $state;
            var $stateParams;
            var $cookies;
            var rideDataService;
            var dateService;
            var driverRideCtrl;

            beforeEach(function() {
                var $state = {
                    current: {
                        data: {
                            action: "index"
                        }
                    }
                };
                $stateParams = {};

                var $cookies = {
                    getObject: function(_) {
                        return "fred";
                    }
                };

                rideDataService = {
                    getRide: function() {
                        return undefined;
                    }
                };

                var dateService = {
                    getThisWeeksDate: function() {
                        return new Date(2016, 12, 18);
                    },
                    dateToString: function() {
                        return "2016-12-18T00:00:00";
                    }
                };

                driverRideCtrl = $controller("driverRideCtrl", {
                    $state: $state,
                    $stateParams: $stateParams,
                    $cookies: $cookies,
                    rideDataService: rideDataService,
                    dateService: dateService
                });
            });

            it("should return true if the toWorkRide object exists.", function() {
                driverRideCtrl.data.toWorkRide = {};

                expect(driverRideCtrl.toWorkRideExists()).toEqual(true);
            });

            it("should return false if the toWorkRide object does not exist.", function() {
                expect(driverRideCtrl.toWorkRideExists()).toEqual(false);
            });
        });

        describe("vm.fromWorkRideExists", function() {
            var $state;
            var $stateParams;
            var $cookies;
            var rideDataService;
            var dateService;
            var driverRideCtrl;

            beforeEach(function() {
                var $state = {
                    current: {
                        data: {
                            action: "index"
                        }
                    }
                };
                $stateParams = {};

                var $cookies = {
                    getObject: function(_) {
                        return "fred";
                    }
                };

                rideDataService = {
                    getRide: function() {
                        return undefined;
                    }
                };

                var dateService = {
                    getThisWeeksDate: function() {
                        return new Date(2016, 12, 18);
                    },
                    dateToString: function() {
                        return "2016-12-18T00:00:00";
                    }
                };

                driverRideCtrl = $controller("driverRideCtrl", {
                    $state: $state,
                    $stateParams: $stateParams,
                    $cookies: $cookies,
                    rideDataService: rideDataService,
                    dateService: dateService
                });
            });

            it("should return true if the fromWorkRide object exists.", function() {
                driverRideCtrl.data.fromWorkRide = {};

                expect(driverRideCtrl.fromWorkRideExists()).toEqual(true);
            });

            it("should return false if the fromWorkRide object does not exist.", function() {
                expect(driverRideCtrl.fromWorkRideExists()).toEqual(false);
            });
        });

        describe("vm.approveRider", function() {
            var rides;
            var rideRiders;

            beforeEach(function() {
                rides = [
                    {
                        username: "fred",
                        isToWork: true,
                        departureTime: "08:15:00",
                        startOfWeekDate: new Date(2016, 12, 18),
                        isOnTime: true
                    },
                    {
                        username: "fred",
                        isToWork: false,
                        departureTime: "17:00:00",
                        startOfWeekDate: new Date(2016, 12, 18),
                        isOnTime: true
                    }
                ];

                rideRiders = [
                    {
                        username: "jim",
                        ride: rides[0],
                        approved: true
                    },
                    {
                        username: "joe",
                        ride: rides[0],
                        approved: true
                    },
                    {
                        username: "jim",
                        ride: rides[1],
                        approved: false
                    }
                ];
            });

            it("should approve rider when passed in.", function() {
                var $state = {
                    current: {
                        data: {
                            action: "show"
                        }
                    }
                };

                var $stateParams = {
                    toWork: false
                };

                var $cookies = {
                    getObject: function(_) {
                        return "fred";
                    }
                };

                var rideDataService = {
                    getRide: function(username, startOfWeekDate, isToWork, successCallback) {
                        successCallback(rides[1]);
                    },
                    getRiders: function(username, startOfWeekDate, isToWork, successCallback) {
                        successCallback([
                            rideRiders[2]
                        ]);
                    },
                    approveRider: function(driver, startOfWeekDate, isToWork, rider, successCallback) {
                        rideRiders[2].approved = true;
                        successCallback();
                    }
                };

                var dateService = {
                    getThisWeeksDate: function() {
                        return new Date(2016, 12, 18);
                    },
                    dateToString: function() {
                        return "2016-12-18T00:00:00";
                    }
                };

                var driverRideCtrl = $controller("driverRideCtrl", {
                    $state: $state,
                    $stateParams: $stateParams,
                    $cookies: $cookies,
                    rideDataService: rideDataService,
                    dateService: dateService
                });

                driverRideCtrl.approveRider(0);

                expect(driverRideCtrl.data.riders[0].approved).toEqual(true);
            });
        });
    });
})();