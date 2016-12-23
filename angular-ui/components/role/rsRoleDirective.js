(function(ng) {
    ng.module("revashare")
    .directive("rsRoleGroup", ["displayStateService", "userDataService", function(displayStateService, userDataService) {
        return {
            restrict: "E",
            transclude: true,
            template: '<div ng-transclude="ng-transclude"></div>',
            link: function(scope, element, attrs) {
                var roles = attrs.rsRoles;

                if (roles === undefined) {
                    roles = [ "Guest" ];
                }
                else {
                    roles = roles.replace(" ", "");
                    roles = roles.split(",");
                }

                function updateVisibility() {
                    userDataService.isInGroup(displayStateService.username, roles, function(isIn) {
                        if (isIn) {
                            element.css({
                                display: "block"
                            });
                        }
                        else {
                            element.css({
                                display: "none"
                            });
                        }
                    });
                }

                displayStateService.addLoginListener(updateVisibility);
                updateVisibility();
            }
        };
    }]);
})(angular);