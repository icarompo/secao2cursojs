//Operations with string
let text = "Asap Rocky";

//escape text
console.log("\"Asap Rocky\"");

//var index (should return "R" in "asap Rocky")
console.log(text[5]);

//concatenate strings
console.log(text.concat(' "Flacko!"'));
console.log(text + ' "Flacko!"');
console.log(`${text} "Flacko!"`);

//return index of the selected string (should return 7 in all results)
console.log(text.indexOf("cky"));
//return index by back to face
console.log(text.lastIndexOf("cky"));
//can receive index to start searching by
console.log(text.indexOf("cky", 3));

//can replace sentences
console.log(text.replace("Rocky", "Ferg"));

//return the lenght of the string(Should return 10)
console.log(text.length);

//return the selected string between the two parameters(Should return "Rocky")
console.log(text.slice(5,10));

//return the selected string splited into an array
console.log(text.split(' '));
//can also receive an parameter to limit the quantity of the return
console.log(text.split(' ', 1));

//return the var with all letters in upper case
console.log(text.toUpperCase());
//have also the lower case variant
console.log(text.toLowerCase());