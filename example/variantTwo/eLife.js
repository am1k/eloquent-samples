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
        "#": Wall,
        "@": TigerHunter,
        "O": SmartPlantEater, // from previous exercise
        "*": Plant,
        "%": WaterArea,
        "^": CleanMama
    }
);