var GridModule = {};

GridModule.Vector = function(x,y) {
    this.x = x;
    this.y = y;
};

GridModule.Vector.prototype.plus = function(other) {
    return new GridModule.Vector(this.x + other.x, this.y + other.y);
};

GridModule.Grid = function(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
};

GridModule.Grid.prototype = {
    isInside: function(vector) {
        return vector.x >= 0 && vector.x < this.width &&
            vector.y >= 0 && vector.y < this.height;
    },
    get: function(vector) {
        return this.space[vector.x + this.width * vector.y];
    },
    set: function(vector, value) {
        this.space[vector.x + this.width * vector.y] = value;
    },
    forEach: function(f, context) {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var value = this.space[x + y * this.width];
                if (value != null)
                    f.call(context, value, new GridModule.Vector(x, y));
            }
        }
    }
};

var directions = {
    "n":  new GridModule.Vector( 0, -1),
    "ne": new GridModule.Vector( 1, -1),
    "e":  new GridModule.Vector( 1,  0),
    "se": new GridModule.Vector( 1,  1),
    "s":  new GridModule.Vector( 0,  1),
    "sw": new GridModule.Vector(-1,  1),
    "w":  new GridModule.Vector(-1,  0),
    "nw": new GridModule.Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");
