function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function dirPlus(dir, n) {
    var index = directionNames.indexOf(dir);
    return directionNames[(index + n + 8) % 8];
}

function BouncingCritter() {
    this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
};

function Wall() {}
