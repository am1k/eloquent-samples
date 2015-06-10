var sizeBoard = 8,
    ñhangeColor = "",
    viewScreen = "",
    breakPoint = "\n";

for (var i = 1; i <= sizeBoard; i++) {
    for (var j = 1; j <= sizeBoard; j++) {
        if ( i % 2 === j % 2) {
            ñhangeColor = "#";
        } else {
            ñhangeColor = " ";
        }
        viewScreen += ñhangeColor;
    }
    viewScreen += breakPoint;
}
console.log(viewScreen);