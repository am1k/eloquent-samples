(function(module) {
    dirPlus = function(dir,n) {
        var index = module.directionNames.indexOf(dir);
        return module.directionNames[(index + n + 8) % 8];
    };
    module.dirPlus = dirPlus;
}(eLife));
