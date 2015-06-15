var arr = [];
var newArr = [];

function reverseArray(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));

