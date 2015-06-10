var lastNumber = 100;

for (var i = 0; i < lastNumber; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBazz");
    } else if (i % 5 === 0) {
        console.log("Bazz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}
