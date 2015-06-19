function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (vect) {
    return new Vector(this.x + vect.x, this.y + vect.y);
};
Vector.prototype.minus = function (vect) {
    return new Vector(this.x - vect.x, this.y - vect.y);
};

Vector.prototype.__defineGetter__("length", function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
});


Object.defineProperty(Vector.prototype, "norm", {get: function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}});

