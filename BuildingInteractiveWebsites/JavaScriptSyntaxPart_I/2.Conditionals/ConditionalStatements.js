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



