(function(module){
    function WaterArea () {
        this.energy = 3 + Math.random() * 4;
    }

    WaterArea.prototype.act = function (context) {

        if (this.energy > 10) {
            var space = context.find(" ");
            if (space)
                return {type: "reproduce", direction: space};
        }
        if (this.energy < 20)
            return {type: "grow"};
    };
    module.WaterArea = WaterArea;

}(eLife));