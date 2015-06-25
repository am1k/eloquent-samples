(function(module) {

        var table = new module.LifelikeWorld(
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
                "#": module.Wall,
                "@": module.TigerHunter,
                "O": module.SmartPlantEater, // from previous exercise
                "*": module.Plant,
                "%": module.WaterArea,
                "^": module.CleanMama
            }
        );
        module.table = table;
}(eLife));