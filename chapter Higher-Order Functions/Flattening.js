 var arrays = [[1, 2, 3], [4, 5], [6]],
     merged = [];
 merged = merged.concat.apply(merged, arrays);
 console.log(merged);