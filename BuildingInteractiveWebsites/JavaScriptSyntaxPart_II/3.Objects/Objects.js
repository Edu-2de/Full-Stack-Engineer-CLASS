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




//aqui criamos a variavel spaceship1 que é um objeto, que tem como alguns componentes, onde cada um possui seu proprio valor
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