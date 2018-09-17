function range(start, end, step) {
  var numList = [];
  if (typeof(start)=="undefined" || typeof(end)=="undefined" || typeof(step)=="undefined") {

  //  console.log(star);
    //nothing happens

  } else   if (step<0) {

  } else if (start>end ) {
    //nothing happens
  } else {
    // all good do program

    var numb = start;
    while (numb <= end) {
      numList.push(numb);
      numb = numb + step;
    }
  }
  return numList;
}

console.log(range(9, 10, 'undefined'));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));