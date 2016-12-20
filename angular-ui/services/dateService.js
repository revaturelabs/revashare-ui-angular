(function(ng) {
    ng.module("revashare")
    .service("dateService", [function() {
        var getThisWeeksDate;

        getThisWeeksDate = function() {
            var now = new Date();
            var dayOfWeek = now.getDay();

            var year = now.getFullYear();
            var month = now.getMonth();
            var day = now.getDate() - dayOfWeek;

            return new Date(year, month, day);
        }

        this.getThisWeeksDate = getThisWeeksDate;
    }]);
})(angular);