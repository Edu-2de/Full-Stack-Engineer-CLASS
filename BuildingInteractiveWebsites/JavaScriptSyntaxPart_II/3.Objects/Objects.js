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




//aqui criamos a variavel spaceship2 que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

//define que o color do nosso spaceship2 sera 'glorious gold'
spaceship2.color = 'glorious gold';
//define que o numEngines do nosso spaceship2 sera 10
spaceship2.numEngines = 10;
//tira a parametro 'Secret Mission' do nosso objeto e seu valor tambem
delete spaceship2['Secret Mission'];




//aqui criamos uma variavel que armazena uma frase
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

//criamos um objeto que tera duas funcoes dentro dele
alienShip = {
  //essa funcao imprime a frase que criamos acima
  retreat() {
    console.log(retreatMessage);
  },
  //essa imprime no console uma outra frase
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
//chamamos as funcoes do nosso objeto para imripir no console as determinadas frases
alienShip.retreat();
alienShip.takeOff();




//aqui criamos a variavel spaceship3 que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
let spaceship3 = {
  passengers: [
    {name: 'Space Dog'}
    ],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
//cria uma variavel que armazena do nosso objeto spaceship3 o valor de 'cookies', que é o primeiro valor do nosso array 'favorite foods'
let capFave = spaceship3.crew.captain['favorite foods'][0]
//cria uma variavel que armazena name:'Space Dog", que é o primeiro item do nosso array passengers
let firstPassenger = spaceship3.passengers[0]




//aqui criamos a variavel spaceship4 que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
//criamos uma funcao que aceita nosso objeto como parametro, e altera o 'Fuel Type' de 'Turbo Fuel' para 'avocado oil'
let greenEnergy = (spaceship4) => {
  spaceship4['Fuel Type'] = 'avocado oil'; 
};
//criamos uma funcao que aceita nosso objeto como parametro, e adiciona a propriedade disabled no nosso objeto, botando um valor true nele
let remotelyDisable = (spaceship4) => {
  spaceship4.disabled = true;  
};
//chama as funcoes que acabamos de criar
remotelyDisable(spaceship4);
greenEnergy(spaceship4);
//imprime o objeto alterado
console.log(spaceship4)
