(function(module){
    function CleanMama () {}

    CleanMama.prototype.act = function (context) {
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
    module.CleanMama = CleanMama;
}(eLife));