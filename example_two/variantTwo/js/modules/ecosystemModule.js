define([], function(){
    var EcosystemModule = function() {

        function Wall() {
        }

        function Plant () {
            this.energy = 3 + Math.random() * 4;
        }

        Plant.prototype.act = function (context) {
            if (this.energy > 10) {
                var space = context.find(" ");
                if (space)
                    return {type: "reproduce", direction: space};
            }
            if (this.energy < 20)
                return {type: "grow"};
        };

        function PlantEater () {
            this.energy = 10;
        }

        PlantEater.prototype.act = function (context) {
            var space = context.find(" ");
            if (this.energy > 60 && space)
                return {type: "reproduce", direction: space};
            var plant = context.find("*");
            if (plant)
                return {type: "eat", direction: plant};
            if (space)
                return {type: "move", direction: space};
        };

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

        function TigerHunter () {
            this.dir = "s";
        }

        TigerHunter.prototype.act = function (context) {

            var space = context.find(" "),
                plant = context.find("*"),
                smart = context.find("O"),
                hunt = context.find("~"),
                start = this.dir;


            if (context.look(SimpleEcosystem.dirPlus(this.dir, 2)) != " ")
                start = this.dir = SimpleEcosystem.dirPlus(this.dir, 2);
            while (context.look(this.dir) != " ") {
                this.dir = SimpleEcosystem.dirPlus(this.dir, 1);
                if (this.dir == start) break;
            }
            if (smart)
                return {type: "eat", direction: smart};
            if (space)
                return {type: "move", direction: space};

            return {type: "move", direction: space};

        };

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

        function CleanMama () {
        }


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
        return {
            Wall: Wall,
            Plant: Plant,
            PlantEater: PlantEater,
            SmartPlantEater: SmartPlantEater,
            TigerHunter: TigerHunter,
            WaterArea: WaterArea,
            CleanMama: CleanMama
        }
    }();

    console.log(EcosystemModule);
    return EcosystemModule;
});
