define(['./worldModule','./ecosystemModule'],function(WorldModule,EcosystemModule){
    var ElifeModule = function () {

        var table = new WorldModule.LifelikeWorld(
            ["##################################################",
                "#                 ####         ****            ###",
                "#   *  @  ##   ^        %     #######       OO  ##",
                "#   O*   ##        O O                ****      *#",
                "#       ##*                        #########  O *#",
                "#      ##***  *         ****                   **#",
                "#* ** O#  *  ***      #########         ^  O   **#",
                "#* **  #      *         ^     #   *            **#",
                "#     ##              #   O   #  **         ######",
                "#*            @       #       #  *       O  #    #",
                "#*    ^               #  ######               ** #",
                "###          ****          ***                ** #",
                "#       O                       @        O       #",
                "#   *     ##  ##  ##  ##             ###      *  #",
                "#   **         #           O *      #####  O O   #",
                "##  **  O   O  #  #    *** ***       ###      ** #",
                "###               #   ****                   ****#",
                "###################################################"],
            {
                "#": EcosystemModule.Wall,
                "@": EcosystemModule.TigerHunter,
                "O": EcosystemModule.SmartPlantEater, // from previous exercise
                "*": EcosystemModule.Plant,
                "%": EcosystemModule.WaterArea,
                "^": EcosystemModule.CleanMama
            }
        );
        return {
            table: table
        }
    }();
    console.log(ElifeModule);
    return ElifeModule
});
