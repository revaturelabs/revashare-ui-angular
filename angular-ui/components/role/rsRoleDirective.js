(function(ng) {
    ng.module("revashare")
    .directive("rsRoleGroup", ["displayStateService", function(displayStateService) {
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
                    roles = roles.replace(/\s/g, "");
                    roles = roles.split(",");
                }

                function updateVisibility() {
                    console.log(roles);

                    if (displayStateService.isInGroup(displayStateService.role, roles)) {
                        element.css({
                            display: "block"
                        });
                    }
                    else {
                        element.css({
                            display: "none"
                        });
                    }
                }

                displayStateService.addLoginListener(updateVisibility);
                updateVisibility();
            }
        };
    }]);
})(angular);