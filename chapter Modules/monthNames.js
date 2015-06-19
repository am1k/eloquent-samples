(function(exports) {
    var monthDay = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    exports.name = function(number) {
        return monthDay[number];
    };
    exports.number = function(name) {
        return monthDay.indexOf(name);
    }

}(this.month = {}));

