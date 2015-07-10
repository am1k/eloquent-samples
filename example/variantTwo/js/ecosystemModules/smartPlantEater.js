(function(module){
    function SmartPlantEater () {
        this.energy = 20;
    }

    SmartPlantEater.prototype.act = function (context) {
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
    module.SmartPlantEater = SmartPlantEater;
}(eLife));