(function(ng) {
    ng.module("revashare")
    .directive("rsDisabled", [function() {
        return {
            restrict: "A",
            scope: {
                disabled: "=rsDisabled"
            },
            link: function(scope, element) {
                element.on("click", function() {
                    scope.disabled = true;
                });

                scope.$watch("disabled", function() {
                    element.attr("disabled", scope.disabled);
                });
            }
        };
    }]);
})(angular);