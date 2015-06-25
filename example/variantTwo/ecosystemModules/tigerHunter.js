(function(module){
    function TigerHunter () {
        this.dir = "s";
    }

    TigerHunter.prototype.act = function (context) {

        var space = context.find(" "),
            plant = context.find("*"),
            smart = context.find("O"),
            hunt = context.find("~"),
            start = this.dir;


        if (context.look(module.dirPlus(this.dir, 2)) != " ")
            start = this.dir = module.dirPlus(this.dir, 2);
        while (context.look(this.dir) != " ") {
            this.dir = module.dirPlus(this.dir, 1);
            if (this.dir == start) break;
        }
        if (smart)
            return {type: "eat", direction: smart};
        if (space)
            return {type: "move", direction: space};

        return {type: "move", direction: space};

    };
    module.TigerHunter = TigerHunter;
}(eLife));