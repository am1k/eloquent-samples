var sizeBoard = 8,
    �hangeColor = "",
    viewScreen = "",
    breakPoint = "\n";

for (var i = 1; i <= sizeBoard; i++) {
    for (var j = 1; j <= sizeBoard; j++) {
        if ( i % 2 === j % 2) {
            �hangeColor = "#";
        } else {
            �hangeColor = " ";
        }
        viewScreen += �hangeColor;
    }
    viewScreen += breakPoint;
}
console.log(viewScreen);