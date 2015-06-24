requirejs.config({
    baseUrl: "js",
    paths: {
        gridModule: "modules/gridModule.js",
        worldModule: "modules/worldModule.js",
        simpleEcosystem: "modules/simpleEcosystemModule.js",
        actionModule: "modules/actionModule.js",
        ecosystemModule: "modules/ecosystemModule.js",
        eLifeModule: "modules/eLifeModule.js"
    }
});

require(['app'], function(app){
});

