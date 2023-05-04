let num1 = 3.14159265358979323846;
let num2 = 15;

//convert a number to string
console.log((num2 * 2).toString() + ' Greetings!');
//convert a number to string rounded to a specified number of decimals
console.log((3.914).toFixed());//should return rounded number: 4
console.log((3.914).toFixed(2));//should return with a specific number of decimals: 3.91

//return a boolean awnser if the number type is integer
console.log(Number.isInteger(num1));//false
console.log(Number.isInteger(num2));//true
//return a boolean awnser if the number type is NaN
console.log(Number.isNaN(num1));//true

