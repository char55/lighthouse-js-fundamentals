function lastIndexOf(arrayList, value) {
  //loop array til value==
  var size = arrayList.length;
  var index = -1;
  for (var i=0; i<size; i++) {
    if (arrayList[i]==value) {
      index = i;
    }
  }
  return index;

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);