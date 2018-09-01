function concat(arrayA, arrayB) {
//  arrayA.push = arrayB;

  size = arrayB.length
  arrayReturn = [];
  
  for (var i=0; i<size; i++) {
    arrayA.push = arrayB[i];
  }

return arrayA;
}
