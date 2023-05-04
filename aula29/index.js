const people = ['Mei', 'Orisa', 'Briggite'];

//add to the next index in the array
people[people.length] = 'Junker Queen';

//add in the array's end
people.push('Symetra');

//add in the array's beggining
people.unshift('Zarya');

console.log(people);
//pops (remove) the last element of the array
const last = people.pop();
console.log(`${last} was popped out of the array`);

console.log(people);

//shifts (remove) the first element of the array
const first = people.shift();
console.log(`${first} was shifted out of the array`);

console.log(people);


