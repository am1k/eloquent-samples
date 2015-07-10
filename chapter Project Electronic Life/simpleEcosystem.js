var SimpleEcosystemModule = {};

SimpleEcosystemModule.randomElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

SimpleEcosystemModule.dirPlus = function(dir,n) {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
};

SimpleEcosystemModule.BouncingCritter = function() {
    this.direction = SimpleEcosystemModule.randomElement(directionNames);
};

SimpleEcosystemModule.BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

function Wall() {}
