requirejs.config({
    baseUrl: "js",
    paths: {
        vector: "gridModules/grid.js",
        grid: "gridModules/grid.js",
        directions: "gridModules/directions.js",
        world: "worldModules/world.js",
        view: "worldModules/view.js",
        elements: "worldModules/elements.js",
        actionTypes: "worldModules/actionTypes.js",
        lifelikeWorld: "worldModules/lifelikeWorld.js",
        dirplus: "simpleEcosystemModules/dirplus.js",
        randomElement: "simpleEcosystemModules/randomElement.js",
        wall: "ecosystemModules/wall.js",
        plant: "ecosystemModules/plant.js",
        plantEater: "ecosystemModules/plantEater.js",
        smartPlantEater: "ecosystemModules/smartPlantEater.js",
        tigerHunter: "ecosystemModules/tigerHunter.js",
        waterArea: "ecosystemModules/waterArea.js",
        cleanMama: "ecosystemModules/cleanMama.js",
        map: "map/map.js",
        animateworld: "animateworld.js"
    }
});

require(['life'], function(life){
});

