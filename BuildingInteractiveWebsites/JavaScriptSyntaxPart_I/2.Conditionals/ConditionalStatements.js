// cSpell:disable

//define a variavel como mutavel com valor de verdadeiro
let sale = true;
//muda o valor da variavel para falso
sale = false;
//define que se a variavel for verdadeira ele imprime a frase time...
if (sale) {
  console.log('Time to buy!');
}



//define a variavel como mutavel com valor de verdadeiro
let sale1 = true;
//muda o valor da variavel para falso
sale1 = false;
//se a variavel for verdadeira ele mostra a frase: 'Time to buy!', se nao for ele imprime: 'Time to wait for a sale.'
if (sale1) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}



//define a variavel como mutavel, valor 7
let hungerLevel = 7;
//se a variavel for maior que 7 ele imprime: 'Time to eat!', se nao for ele imprimne: 'We can eat later!'
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}



//define as variaveis como mutaveis, valor 'sleepy' e 6
let mood = 'sleepy';
let tirednessLevel = 6;
//se mood for igual a 'sleepy' e tirendnessLevel for maior que 8, ele imprime 'time to sleep', se alguma dessa exigencias nao for atendida, ele imrpime 'not bed time yet'
if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}



//define a variavel mutavel como 0, depois define o valor da variavel como 1 
let wordCount = 0;
wordCount = 1;
//se wordCount for maior que 0 ele vai imprimir: "Great! You've started your work!", se nao: 'Better get to work!'
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//define a variavel mutavel como 'Hello World!', depois define o valor da variavel como '' 
let favoritePhrase = 'Hello World!';
favoritePhrase = '';
//se a variavel favoritePhrase nao for vazia, entao ele vai imprimir: This string doesn't seem to be empty.", se for vazia, ai sera: 'This string is definitely empty.'
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}



//define a variavel como uma string vazia
let tool = '';
//da uma valor de outra string para a variavel
tool = 'marker';
//diz que writingUtensil vai ser igual a tool, se a variavel tool for vazia, entao ele define writingUtensil como 'pen', ou seja um ou o outro.
let writingUtensil = tool || 'pen';
//imprime a varivael no meio da grase
console.log(`The ${writingUtensil} is mightier than the sword.`);



//define a variavel como false
let isLocked = false;
//se a variavel isLocked for tue, entao ele imprimira 'You will need a key to open the door.', se nao for true, ou seja false, ele vai imprimir: 'You will not need a key to open the door.'
isLocked? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.');

//define a variavel como true
let isCorrect = true;
//se a variavel isCorrect for true, entao ele vai imprimir 'Correct!', se nao for true ele imprime: 'Incorrect!'
isCorrect? console.log('Correct!')
: console.log('Incorrect!');

//define a variavel como 'Love That!'
let favoritePhrase1 = 'Love That!';
//se a variavel favoritePhrase1 for igual a 'Love That!, entao ele vai imprimir I love that!', se nao for igual ele imprime: "I don't love that!"
favoritePhrase1 === 'Love That!'? console.log('I love that!')
: console.log("I don't love that!");



//define a variavel mutavel como summer
let season = 'summer';
//se a variavel for igual a spring, mostra 'It\'s spring! The trees are budding!'
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');

//se a variavel for igual a winter, mostra 'It\'s winter! Everything is covered in snow.'
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')

//se a variavel for igual a fall, mostra 'It\'s fall! Leaves are falling!'
}else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')

//se a variavel for igual a summer, mostra 'It\'s sunny and warm because it\'s summer!'
}else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}

//se nao for igual a nenhuma das de cima ele mostra 'Invalid season.'
else {
  console.log('Invalid season.');
}



//define a variavel mutavel como 'first place'
let athleteFinalPosition = 'first place';

//mostra o switch case, igual o if mas desse outro jeito:
switch (athleteFinalPosition) {

  // caso 1, se athleteFinalPosition for igual a 'first place', mostra: 'You get the gold medal!'
  case 'first place':
    console.log('You get the gold medal!');
  break;

  // caso 2, se athleteFinalPosition for igual a 'second place', mostra: 'You get the silver medal!'
  case 'second place':
    console.log('You get the silver medal!');
  break;

  // caso 3, se athleteFinalPosition for igual a 'third place', mostra: 'You get the bronze medal!'
  case 'third place':
    console.log('You get the bronze medal!');
    break;

  //se athleteFinalPosition nao for igual nenhuma das alternativcas acima, mostra: 'No medal awarded.'
  default:
    console.log('No medal awarded.');
    break;
 
}