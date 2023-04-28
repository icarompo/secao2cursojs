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

