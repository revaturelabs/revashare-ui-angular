(function(ng) {
    ng.module("revashare")
    .directive("rsDisabled", [function() {
        return {
            restrict: "A",
            scope: {
                disabled: "=rsDisabled"
            },
            link: function(scope, element) {
                var parent = element.parent();

                while (parent.prop("tagName").toLowerCase() !== "form") {
                    parent = parent.parent();
                }

                if (parent !== null) {
                    parent.on("submit", function() {
                        scope.disabled = true;
                    });
                }

                scope.$watch("disabled", function() {
                    element.attr("disabled", scope.disabled);
                });
            }
        };
    }]);
})(angular);