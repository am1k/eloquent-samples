define(['./gridModule'],function(GridModule){
    var WorldModule = function () {

        function World(map, legend) {
            var grid = new GridModule.Grid(map[0].length, map.length);
            this.grid = grid;
            this.legend = legend;

            map.forEach(function (line, y) {
                for (var x = 0; x < line.length; x++) {
                    grid.set(new GridModule.Vector(x, y),
                        elementFromChar(legend, line[x]));
                }
            });
        }

        World.prototype = {
            toString: function () {
                var output = '';
                for (var y = 0; y < this.grid.height; y++) {
                    for (var x = 0; x < this.grid.width; x++) {
                        var element = this.grid.get(new GridModule.Vector(x, y));
                        output += charFromElement(element);
                    }
                    output += '\n';
                }
                return output;
            },
            turn: function () {
                var acted = [];
                this.grid.forEach(function (critter, vector) {
                    if (critter.act && acted.indexOf(critter) == -1) {
                        acted.push(critter);
                        this.letAct(critter, vector);
                    }
                }, this);
            },
            letAct: function (critter, vector) {
                var action = critter.act(new View(this, vector));
                if (action && action.type == 'move') {
                    var dest = this.checkDestination(action, vector);
                    if (dest && this.grid.get(dest) == null) {
                        this.grid.set(vector, null);
                        this.grid.set(dest, critter);
                    }
                }
            },
            checkDestination: function (action, vector) {
                if (directions.hasOwnProperty(action.direction)) {
                    var dest = vector.plus(directions[action.direction]);
                    if (this.grid.isInside(dest))
                        return dest;
                }
            }
        };

        function View(world, vector) {
            this.world = world;
            this.vector = vector;
        }

        View.prototype = {
            look: function (dir) {
                var target = this.vector.plus(directions[dir]);
                if (this.world.grid.isInside(target))
                    return charFromElement(this.world.grid.get(target));
                else
                    return '#';
            },
            findAll: function (ch) {
                var found = [];
                for (var dir in directions)
                    if (this.look(dir) == ch)
                        found.push(dir);
                return found;
            },
            find: function (ch) {
                var found = this.findAll(ch);
                if (found.length == 0) return null;
                return randomElement(found);
            }
        };

        function LifelikeWorld(map, legend) {
            World.call(this, map, legend);
        }

        LifelikeWorld.prototype = Object.create(World.prototype);

        LifelikeWorld.prototype.letAct = function (critter, vector) {
            var action = critter.act(new View(this, vector));
            var handled = action &&
                action.type in actionTypes &&
                actionTypes[action.type].call(this, critter,
                    vector, action);
            if (!handled) {
                critter.energy -= 0.2;
                if (critter.energy <= 0)
                    this.grid.set(vector, null);
            }
        };

        function elementFromChar(legend, ch) {
            if (ch == " ")
                return null;
            var element = new legend[ch]();
            element.originChar = ch;
            return element;
        }

        function charFromElement(element) {
            if (element == null)
                return ' ';
            else
                return element.originChar;
        }

        var directions = {
            'n': new GridModule.Vector(0, 1),
            'ne': new GridModule.Vector(1, -1),
            'e': new GridModule.Vector(1, 0),
            'se': new GridModule.Vector(1, 1),
            's': new GridModule.Vector(0, -1),
            'sw': new GridModule.Vector(-1, 1),
            'w': new GridModule.Vector(-1, 0),
            'nw': new GridModule.Vector(-1, -1)
        };

        return {
            World: World,
            View: View,
            LifelikeWorld: LifelikeWorld,
            directions: directions
        }

    }();
    console.log(WorldModule);
    return WorldModule;
});
