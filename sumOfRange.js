var arr = [],
    total = 0,
    count = 1;

function range(start,end, step) {

    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else if (step < 0) {
        for (var j = end; j >= start; j -= step) {
            arr.push(j);
        }
    } else {
        for (var k = start; k <= end; k++) {
            arr.push(k);
        }
    }
    return arr;
}

function sum(){

    while (count <= arr.length) {
        total += count;
        count += 1;
    }
    return total;
}
sum(range);
console.log(sum(range(1,10, 2)));

