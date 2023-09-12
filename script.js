// Model

const greetings = ['wave', 'fistbump', 'middle-finger', 'Sign'];
const persons = [
  {
    name: 'Bob',
    greeting: greetings[0],
  },
  {
    name: 'Espen',
    greeting: greetings[1],
  },
  {
    name: 'Granny',
    greeting: greetings[2],
  },
  {
    name: 'Greta',
    greeting: greetings[3],
  },
];
let currentPerson = null;
let coolFactor = 0;

// View

const app = document.getElementById('app');
randomPerson();
updateView();

function updateView() {
  app.innerHTML = /*html*/ `
    <div>Kulhet: ${coolFactor}</div>
    <div id='båt'>x</div>
    <div id='personId'>${showPersonHTML(currentPerson)}</div>
    <div>${buttonsHTML()}</div>
    <button onclick="randomPerson()">KNAPP</button>
`;
}

// Controller

function buttonsHTML() {
    let html = '';
    for (let i = 0; i < greetings.length; i++) {
        html += /* html */`
            <button onclick="greetPerson('${greetings[i]}')">${greetings[i]}</button>
        `
    }
    return html;
}

function greetPerson(greeting) {
    
}

function showPersonHTML(person) {
    return /*html*/`
        <p>Navn: ${person.name}</p>
        <p>Greeting: ${person.greeting}</p>
    `;
}

function randomPerson(){
    let lastPerson = currentPerson;
    let index = Math.floor(Math.random() * persons.length)
    currentPerson = persons[index]
    if (lastPerson == currentPerson){
        return randomPerson();
    }
    updateView();
}