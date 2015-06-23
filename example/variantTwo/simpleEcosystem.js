var SimpleEcosystem = function() {

    randomElement = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    dirPlus = function(dir,n) {
        var index = GridModule.directionNames.indexOf(dir);
        return GridModule.directionNames[(index + n + 8) % 8];
    };

    BouncingCritter = function() {
        this.direction = randomElement(directionNames);
    };

    BouncingCritter.prototype.act = function(view) {
        if (view.look(this.direction) != " ")
            this.direction = view.find(" ") || "s";
        return {type: "move", direction: this.direction};
    };

    return {
          dirPlus: dirPlus

    }
}();
