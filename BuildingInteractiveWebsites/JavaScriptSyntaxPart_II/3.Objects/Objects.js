// cSpell:disable

//aqui criamos a variavel fasterShip que é um objeto, que tem como caracteristicas o 'Fuel Type' e color, que tem seus respectiovs valores...
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
   color: 'silver'
};




//aqui criamos a variavel spaceship que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

//cria duas variaveis, que irao armazenar tanto o numCrew como o flightPath do nosso spaceship object, ou seja 5  e a array: ['Venus', 'Mars', 'Saturn']
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;




//aqui criamos a variavel spaceship1 que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
let spaceship1 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
};
//cria uma variavel que armazena 'Active Mission' string
let propName =  'Active Mission';
//cria uma varivale que armazena 'Active Mission' do spaceship1, ou seja true
let isActive = spaceship1['Active Mission']
//imprime true no console
console.log(isActive)