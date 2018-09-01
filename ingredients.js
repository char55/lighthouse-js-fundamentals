var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

listNum = ingredients.length -1;
//  console.log(listNum);

// Write a while loop that prints out the contents of ingredients:
let count = 0;
while (count<=listNum) {
  console.log(ingredients[count]);
  count++;
}


// Write a for loop that prints out the contents of ingredients:

for(var i=0; i<listNum;i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var x=listNum; x>=0; x--) {
    console.log(ingredients[x]);
}


