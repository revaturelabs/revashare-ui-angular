(function(ng) {
    ng.module("revashare")
    .service("dateService", [function() {
        this.getThisWeeksSunday = function() {
            var now = Date();
            var dayOfWeek = now.getDay();

            var year = now.getYear();
            var month = now.getMonth();
            var day = now.getDay() - dayOfWeek;

            if (day < 1) {
                month -= 1;
            }

            return Date(year, month, day);
        };
    }]);
})(angular);