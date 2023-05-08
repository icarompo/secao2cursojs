function myForm() {
    const form = document.querySelector('.form');
    const personText = document.querySelector('.person');
    const peopleText = document.querySelector('.people');
    
    const people = [];
    function addPerson (name, age, weight, height) {
        return {
            name,
            age,
            weight,
            height
        }

    };

    let aux = 1;
    function eventForm (event) {
        event.preventDefault();
        
        const name = form.querySelector('.name');
        const age = form.querySelector('.age');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        //console.log(name.value, age.value, weight.value, height.value);

        const person= addPerson(name.value, age.value, weight.value, height.value);

        people.push(person);        
        console.log(people);

        let text = ``;

        for (let index = 0; index < people.length; index++) {
            text += `\n\n${people[index].name},\n\n`;
        }

        personText.innerHTML += `Pessoa ${aux}: ${person.name} ${person.age} ${person.weight} ${person.height}<br />`;
        peopleText.innerHTML = `<br />Pessoas: ${text}<br />`;

        aux++;
    }

    form.addEventListener('submit', eventForm);
}
myForm();
