var WorldModule = {};

WorldModule.randomElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

WorldModule.elementFromChar = function(legend, ch) {
    if (ch == " ")
        return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
};

WorldModule.charFromElement = function(element) {
    if (element == null)
        return " ";
    else
        return element.originChar;
};

WorldModule.View = function(world, vector) {
    this.world = world;
    this.vector = vector;
};

WorldModule.View.prototype = {
    look: function(dir) {
        var target = this.vector.plus(directions[dir]);
        if (this.world.grid.isInside(target))
            return WorldModule.charFromElement(this.world.grid.get(target));
        else
            return "#";
    },
    findAll: function(ch) {
        var found = [];
        for (var dir in directions)
            if (this.look(dir) == ch)
                found.push(dir);
        return found;
    },
    find: function(ch) {
        var found = this.findAll(ch);
        if (found.length == 0) return null;
        return WorldModule.randomElement(found);
    }
};


WorldModule.World = function(map, legend) {
    var grid = new GridModule.Grid (map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line, y) {
        for (var x = 0; x < line.length; x++)
            grid.set(new GridModule.Vector(x, y),
                WorldModule.elementFromChar(legend, line[x]));
    });
};

WorldModule.World.prototype = {
    toString: function() {
        var output = "";
        for (var y = 0; y < this.grid.height; y++) {
            for (var x = 0; x < this.grid.width; x++) {
                var element = this.grid.get(new GridModule.Vector(x, y));
                output += WorldModule.charFromElement(element);
            }
            output += "\n";
        }
        return output;
    },
    turn: function() {
        var acted = [];
        this.grid.forEach(function(critter, vector) {
            if (critter.act && acted.indexOf(critter) == -1) {
                acted.push(critter);
                this.letAct(critter, vector);
            }
        }, this);
    },
    letAct: function(critter, vector) {
        var action = critter.act(new WorldModule.View(this, vector));
        if (action && action.type == "move") {
            var dest = this.checkDestination(action, vector);
            if (dest && this.grid.get(dest) == null) {
                this.grid.set(vector, null);
                this.grid.set(dest, critter);
            }
        }
    },
    checkDestination: function(action, vector) {
        if (directions.hasOwnProperty(action.direction)) {
            var dest = vector.plus(directions[action.direction]);
            if (this.grid.isInside(dest))
                return dest;
        }
    }
};


WorldModule.LifelikeWorld = function(map, legend) {
    WorldModule.World.call(this, map, legend);
};

WorldModule.LifelikeWorld.prototype = Object.create(WorldModule.World.prototype);

WorldModule.LifelikeWorld.prototype.letAct = function(critter, vector) {
    var action = critter.act(new WorldModule.View(this, vector));
    var handled = action &&
        action.type in EcosystemModule.ationTypes &&
        EcosystemModule.ationTypes[action.type].call(this, critter,
            vector, action);
    if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0)
            this.grid.set(vector, null);
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

