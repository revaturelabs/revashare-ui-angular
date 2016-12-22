(function(ng) {
    ng.module("revashare")
    .filter("rsTime", function() {
        return function(input) {
            return (new Date("2016-12-31T" + input)).toLocaleTimeString();
        }
    })
    .service("dateService", [function() {
        var getThisWeeksDate;
        var dateToString;

        getThisWeeksDate = function() {
            var now = new Date();
            var dayOfWeek = now.getDay();

            var year = now.getFullYear();
            var month = now.getMonth();
            var day = now.getDate() - dayOfWeek;

            return new Date(year, month, day);
        };

        dateToString = function(date) {
            var s = "";

            s += date.getUTCFullYear();
            s += "-";
            s += date.getUTCMonth() + 1;
            s += "-";
            s += date.getUTCDate();
            s += "T00:00:00";

            return s;
        }

        this.getThisWeeksDate = getThisWeeksDate;
        this.dateToString = dateToString;
    }]);
})(angular);