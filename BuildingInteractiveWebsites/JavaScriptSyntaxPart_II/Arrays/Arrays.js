//// cSpell:disable

//cria uma array em uma variavel chamada newYearsResolutions
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
//printa a variavel, ou seja prina o array
console.log(newYearsResolutions);



//cria uma array em uma variavel chamada hobbies
const hobbies = ['oi ', ' tudo', 'bem '];
//printa a variavel, ou seja prina o array
console.log(hobbies);



//cria uma array em uma variavel chamada famousSayings
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
//cria uma variavel que armazena o primeiro item da array, ou seja 'Fortune favors the brave.'
const listItem = famousSayings[0];
//printa o 4 item do array, ou seja vai dar undefined, pois o array so tem 2 itens, pois comeca no 0 ate o 2
console.log(famousSayings[3]);



//cria uma array em uma variavel chamada groceryList
let groceryList = ['bread', 'tomatoes', 'milk'];
//define que o segundo item do array vai ser avocados
groceryList[1] = 'avocados';



//cria uma array em uma variavel chamada condiments
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
//cria uma array em uma variavel imutavel chamada utensils
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
//define que o primeiro item do array condiments vai ser Mayo
condiments[0] = 'Mayo';

//imprime o array condiments
console.log(condiments);

//define que o array condiments vai ser ter um item só, sendo ele 'Mayo'
condiments = ['Mayo']
//imrpime o array condiments, ou seja 'Mayo'
console.log(condiments);

//define que o 4 item do array utensils vai ser 'Spoon', e funciona pois so a variavel é imutavel, o array em si da para mexer a vontade
utensils[3] = 'Spoon';
//imprime o array utensils
console.log(utensils);




//cria uma array em uma variavel chamada objectives
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
//imrpime a quantidade de itens que tem o array, ou seja 3
console.log(objectives.length)