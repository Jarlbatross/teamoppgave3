// Model

const greetings = [
  'wave',
  'fistbump',
  'middle-finger',
  'Sign',
  'Feedback-tool',
];
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
  {
    name: 'Terje',
    greeting: greetings[4],
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
    <div style="width: 50px; height: 100px; border: solid 1px #000;background-image: linear-gradient(to top, green ${coolFactor}%, rgba(0,0,0,0) 0%)"></div>
    <div id='båt'>${boatImageHTML()}</div>
    <div id='personId'>${showPersonHTML(currentPerson)}</div>
    <div>${buttonsHTML()}</div>
    <button onclick="randomPerson()">Kjør videre</button>
`;
}

function buttonsHTML() {
  let html = '';
  for (let i = 0; i < greetings.length; i++) {
    html += /* html */ `
          <button onclick="greetPerson('${greetings[i]}')">${greetings[i]}</button>
      `;
  }
  return html;
}

function showPersonHTML(person) {
  return /*html*/ `
      <p>Navn: ${person.name}</p>
      <p>Greeting: ${person.greeting}</p>
  `;
}

function boatImageHTML() {
  let image = "img/stroke-faster.gif";
  if (coolFactor >= 30) {
    image = 
  }
  let html = /*html*/``;
  return html;
}

// Controller

function greetPerson(greeting) {
  if (currentPerson.greeting == greeting && coolFactor < 100) {
    coolFactor += 10;
  } else if (currentPerson.greeting != greeting && coolFactor > 0) {
    coolFactor -= 10;
  }
  randomPerson();
}

function randomPerson() {
  let lastPerson = currentPerson;
  let index = Math.floor(Math.random() * persons.length);
  currentPerson = persons[index];
  if (lastPerson == currentPerson) {
    return randomPerson();
  }
  updateView();
}
