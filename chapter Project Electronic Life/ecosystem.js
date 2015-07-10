var EcosystemModule = {};

function Wall() {}

EcosystemModule.ationTypes = Object.create(null);

EcosystemModule.ationTypes = {
    grow: function(critter) {
        critter.energy += 0.5;
        return true;
    },
    move: function(critter, vector, action) {
        var dest = this.checkDestination(action, vector);
        if (dest == null ||
            critter.energy <= 1 ||
            this.grid.get(dest) != null)
            return false;
        critter.energy -= 1;
        this.grid.set(vector, null);
        this.grid.set(dest, critter);
        return true;
    },
    eat: function(critter, vector, action) {
        var dest = this.checkDestination(action, vector);
        var atDest = dest != null && this.grid.get(dest);
        if (!atDest || atDest.energy == null)
            return false;
        critter.energy += atDest.energy;
        this.grid.set(dest, null);
        return true;
    },
    reproduce: function(critter, vector, action) {
        var baby = WorldModule.elementFromChar(this.legend,
            critter.originChar);
        var dest = this.checkDestination(action, vector);
        if (dest == null ||
            critter.energy <= 2 * baby.energy ||
            this.grid.get(dest) != null)
            return false;
        critter.energy -= 2 * baby.energy;
        this.grid.set(dest, baby);
        return true;
    }
};

EcosystemModule.Plant = function() {
    this.energy = 3 + Math.random() * 4;
};

EcosystemModule.Plant.prototype.act = function(context) {
    if (this.energy > 10) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

EcosystemModule.PlantEater = function() {
    this.energy = 10;
};

EcosystemModule.PlantEater.prototype.act = function(context) {
    var space = context.find(" ");
    if (this.energy > 60 && space)
        return {type: "reproduce", direction: space};
    var plant = context.find("*");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
};

EcosystemModule.SmartPlantEater = function() {
    this.energy = 20;
};

EcosystemModule.SmartPlantEater.prototype.act = function(context) {
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

EcosystemModule.TigerHunter = function() {
    this.dir = "s";
};

EcosystemModule.TigerHunter.prototype.act = function(context) {

    var space = context.find(" "),
        plant = context.find("*"),
        smart = context.find("O"),
        hunt =  context.find("~"),
        start = this.dir;


    if (context.look(SimpleEcosystemModule.dirPlus(this.dir, 2)) != " ")
        start = this.dir = SimpleEcosystemModule.dirPlus(this.dir, 2);
    while (context.look(this.dir) != " ") {
        this.dir = SimpleEcosystemModule.dirPlus(this.dir, 1);
        if (this.dir == start) break;
    }
    if (smart)
        return {type: "eat", direction: smart};
    if (space)
        return {type: "move", direction: space};

    return {type: "move", direction: space};

};

EcosystemModule.WaterArea = function() {
    this.energy = 3 + Math.random() * 4;
};

EcosystemModule.WaterArea.prototype.act = function(context) {

    if (this.energy > 10) {
        var space = context.find(" ");
        if (space)
            return {type: "reproduce", direction: space};
    }
    if (this.energy < 20)
        return {type: "grow"};
};

EcosystemModule.CleanMama = function() {};


EcosystemModule.CleanMama.prototype.act = function(context) {
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

var table = new WorldModule.LifelikeWorld(
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
        "@": EcosystemModule.TigerHunter,
        "O": EcosystemModule.SmartPlantEater, // from previous exercise
        "*": EcosystemModule.Plant,
        "%": EcosystemModule.WaterArea,
        "^": EcosystemModule.CleanMama
    }
);