var arr = [],
    total = 0,
    count = 1;

function range(start,end, step) {

    if (step > 0 && start < end) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else if (step > 0 && start > end) {
        for (var q = end; q <= start; q += step) {
            arr.push(q);
        }
    }
    else if (step < 0 && start > end) {
        for (var l = start; l >= end; l += step) {
            arr.push(l);
        }
    } else if (step < 0 && start < end) {
        for (var j = end; j >= start; j += step) {
            arr.push(j);
        }
    }
    else {
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
console.log(range(1,10, 2));

