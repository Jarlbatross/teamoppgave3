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
    image: 'img/persons/bob.png'
  },
  {
    name: 'Espen',
    greeting: greetings[1],
    image: 'img/persons/espen.png'
  },
  {
    name: 'Granny',
    greeting: greetings[2],
    image: 'img/persons/granny.png'
  },  
  {
    name: 'Greta',
    greeting: greetings[3],
    image: 'img/persons/gretha.png'
  },
  {
    name: 'Terje',
    greeting: greetings[4],
    image: 'img/persons/terje.png'
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
  return `<img class="person" src="${person.image}"/>`;
}

function boatImageHTML() {

  if (coolFactor > 80) {
    return `<img class="boat flip" src="img/boats/big-boat.webp" alt="" />`;
  }
  if (coolFactor > 50) {
    return `<img class="boat flip" src="img/boats/yacht-boat-ride.gif" alt="" />`;
  }
  if (coolFactor > 20) {
    return `<img class="boat flip" src="img/boats/sailing-boat-trip.gif" alt="" />`;
  }

  return `<img class="boat flip" src="img/boats/stroke-faster.gif" alt="" />`;

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
