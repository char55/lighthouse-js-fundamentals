
/*
Define a function merge, which, given two sorted arrays containing numbers,
returns a sorted array of the numbers from both lists.
*/

var merge = function(array1, array2) {
  var array3 = array1.concat(array2);
  array3.sort();
  return array3;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
//console.log(merge([ 1, 2, 6 ], [5,6,7]), "=?", [ 1, 2, 6 ]);