function addPeople(name, age, height) {
  return {
    name,
    age,
    height,

    saysAge() {
      console.log(`My age is ${this.age}, I was born in ${this.age - 2023}-`);
    },
    
    rot() {
      this.age++;
      console.log(`I'm dying!!`);
    },
  };
}

const human1 = addPeople("Icaro", 20, 1.8);
const human2 = addPeople("Ezequiel", 18, 1.7);
const human3 = addPeople("Nathan", 13, 1.5);

human3.rot();
human1.saysAge(); 
human3.saysAge(); 

const people = [human1, human2, human3]; 
console.log(people[0]); 