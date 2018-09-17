function loopyLighthouse(range, multiples, words) {
  start = range[0];
  end = (range[1])+1;

  for (var i=start; i < end; i++) {
    if (i % multiples[0] === 0  && i % multiples[1] !== 0) {
      console.log(words[0])
    } else if (i % multiples[1] === 0  && i % multiples[0] !== 0) {
      console.log(words[1]);
    } else  if (i % multiples[1] === 0  &&  i % multiples[0] === 0) {
      console.log(words[0] + words[1]);
    } else {
      console.log(i);
    }
  }

  return
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);