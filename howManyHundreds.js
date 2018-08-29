function howManyHundreds(number) {
var numbWithDecimal = number / 100;
var decimal = numbWithDecimal % 1;
var difference = numbWithDecimal - decimal;

return difference;

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);