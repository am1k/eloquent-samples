var sizeTree = 7,
    stars,
    star,
    space,
    spaces;

for (var i = 0; i <= sizeTree; i++) {
    space = sizeTree - i;
    spaces = "";
    for (var j = 0; j < space; j++) {
        spaces += " ";
    }
    star = i * 2 + 1;
    stars = "";
    for (var k = 0; k < star; k++) {
        stars += "*";
    }
    console.log(spaces + stars);
}