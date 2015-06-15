function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 == null || obj2 == null) {
        return false;
    }
    if (typeof  obj1 === "object" && typeof obj2 === "object") {
        var keys1 = Object.keys(obj1);
        var keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (var i in obj1) {
            if(deepEqual(obj1[i], obj2[i]) === false) {
                return false;
            }
        }
        return true;
    }
    return false;

}
