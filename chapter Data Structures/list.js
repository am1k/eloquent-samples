function arrayToList(array) {
    var list = [];
    for (var i=array.length-1; i>=0; i--)
        list = {value: array[i], rest:list};
    return list;
}
console.log(arrayToList([10, 20]));


function listToArray(list) {
    var array = [];

    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, rest){
    return {
        value: value,
        rest: rest
    };
}

function nth(list, num) {
    var count = 0;

    for (var node = list; node; node = node.rest) {
        if (count === num) {
            return node.value;
        } else {
            count++;
        }
    }

}
