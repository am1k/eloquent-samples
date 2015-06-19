
function Wall() {}

var actionTypes = Object.create(null);

actionTypes.grow = function(critter) {
    critter.energy += 0.5;
    return true;
};

actionTypes.move = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    if (dest == null ||
        critter.energy <= 1 ||
        this.grid.get(dest) != null)
        return false;
    critter.energy -= 1;
    this.grid.set(vector, null);
    this.grid.set(dest, critter);
    return true;
};

actionTypes.eat = function(critter, vector, action) {
    var dest = this.checkDestination(action, vector);
    var atDest = dest != null && this.grid.get(dest);
    if (!atDest || atDest.energy == null)
        return false;
    critter.energy += atDest.energy;
    this.grid.set(dest, null);
    return true;
};

actionTypes.reproduce = function(critter, vector, action) {
    var baby = elementFromChar(this.legend,
        critter.originChar);
    var dest = this.checkDestination(action, vector);
    if (dest == null ||
        critter.energy <= 2 * baby.energy ||
        this.grid.get(dest) != null)
        return false;
    critter.energy -= 2 * baby.energy;
    this.grid.set(dest, baby);
    return true;
};

function Plant() {
    this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(context) {
    if (this.energy > 10) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

function PlantEater() {
    this.energy = 10;
}
PlantEater.prototype.act = function(context) {
    var space = context.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = context.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};

function SmartPlantEater() {
    this.energy = 20;
}

SmartPlantEater.prototype.act = function(context) {
    var space = context.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    if (this.energy > 70)
        return {type: "move", direction: space};
    var plant = context.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};

function TigerHunter() {
    this.dir = "s";
}

TigerHunter.prototype.act = function(context) {

    var space = context.find(" "),
        plant = context.find("*"),
        smart = context.find("O"),
        hunt =  context.find("~"),
        start = this.dir;


    if (context.look(dirPlus(this.dir, 2)) != " ")
        start = this.dir = dirPlus(this.dir, 2);
    while (context.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
    }
    if (smart)
        return {type: "eat", direction: smart};
    if (space)
        return {type: "move", direction: space};

    return {type: "move", direction: space};

};

function WaterArea() {
    this.energy = 3 + Math.random() * 4;
}

WaterArea.prototype.act = function(context) {

    if (this.energy > 10) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};
function CleanMama() {
}
CleanMama.prototype.act = function(context) {
    var space = context.find(" "),
        plant = context.find("*"),
        water = context.find("%");
    if (water)
        return {type: "eat", direction: water};
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};

var table = new LifelikeWorld(
    ["####################################################",
        "#                 ####         ****              ###",
        "#   *  @  ##   ^        %     ########       OO    ##",
        "#   *    ##        O O                 ****       *#",
        "#       ##*                        ##########     *#",
        "#      ##***  *         ****                     **#",
        "#* **  #  *  ***      #########          ^       **#",
        "#* **  #      *         ^     #   *              **#",
        "#     ##              #   O   #  ***          ######",
        "#*            @       #       #   *        O  #    #",
        "#*    ^               #  ######                 ** #",
        "###          ****          ***                  ** #",
        "#       O                        @         O       #",
        "#   *     ##  ##  ##  ##               ###      *  #",
        "#   **         #              *       #####  O     #",
        "##  **  O   O  #  #    ***  ***        ###      ** #",
        "###               #   *****                    ****#",
        "####################################################"],
    {
        "#": Wall,
        "@": TigerHunter,
        "O": SmartPlantEater, // from previous exercise
        "*": Plant,
        "%": WaterArea,
        "^": CleanMama
    }
);