function countBs(name) {
    var count = 0;

    for (var i=0; i <name.length - 1; i++) {
        if (name.charAt(i) === "B") {
            count++;
        }
    }
    return count;
}

function countChar(name,param) {
    var count = 0;

    for (var i=0; i <name.length; i++) {
        if (name.charAt(i) === param) {
            count++;
        }
    }
    return count;
}