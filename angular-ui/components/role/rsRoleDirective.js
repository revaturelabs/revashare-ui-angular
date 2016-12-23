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
                    roles = [];
                }
                else {
                    roles = roles.replace(" ", "");
                    roles = roles.split(",");
                }

                element.css({
                    display: "none"
                });
            }
        };
    }]);
})(angular);