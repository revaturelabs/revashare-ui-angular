(function(ng) {
    ng.module("revashare")
    .directive("rsDisable", [function() {
        return {
            restrict: "A",
            scope: {
                disabled: "=rsDisable"
            },
            link: function(scope, element) {
                element.on("submit", function() {
                    scope.disabled = true;
                });
            }
        };
    }]);
})(angular);