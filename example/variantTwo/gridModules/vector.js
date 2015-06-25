(function(module) {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }

    Vector.prototype = {
        plus: function (other) {
            return new Vector(this.x + other.x, this.y + other.y);
        },
        toString: function () {
            return 'Vector, x: ' + this.x + ' y: ' + this.y;
        }
    };
    module.Vector = Vector;
}(eLife));