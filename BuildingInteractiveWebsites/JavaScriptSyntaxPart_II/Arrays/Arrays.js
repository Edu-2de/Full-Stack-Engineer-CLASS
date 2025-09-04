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
console.log(objectives.length);



//cria uma array em uma variavel chamada chores
const chores = ['wash dishes', 'do laundry', 'take out trash'];
//define que o array, alem dos itens que ja tem, vai adicionar os itens '1' e '2'
chores.push('1', '2')
//imprime o array
console.log(chores)




//cria uma array em uma variavel chamada chores1
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
//tira o ultimo item do array
chores1.pop();
//imprime o array, mas agora sem o ultimo item dele
console.log(chores1)



// Cria um array com vários itens da lista de compras
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// .unshift() adiciona um elemento no **início** do array, ou seja 'popcorn' no inicio do array
groceryList.unshift('popcorn')

// .slice(inicio, fim) retorna uma **cópia de parte do array**
// Então vai retornar ['orange juice', 'bananas', 'coffee beans']
console.log(groceryList.slice(1,4))

// Mostra o array inteiro depois de adicionar 'popcorn' no início
console.log(groceryList)

// .indexOf('pasta') retorna o índice onde o item aparece no array, ou seja 5
const pastaIndex = groceryList.indexOf('pasta')
// Mostra o índice encontrado (5)
console.log(pastaIndex)



// Cria um array com vários itens em uma variavel concept
const concept = ['arrays', 'can', 'be', 'mutated'];

//cria uma funcao que muda o array, passando um array como parametro, e ele altera o 4 item do array para 'MUTATED'
function changeArr(arr){
  arr[3] = 'MUTATED';
}
//chama a funcao colocando concept como parametro
changeArr(concept);
//printa o novo array, com 'MUTATED' nele
console.log(concept)

//cria uma funcao que remove o ultimo elemento do array
function removeElement(newArr){
  return newArr.pop()
}
//chama a funcao passando o array concept como parametro
removeElement(concept);
//printa concept array sem o ultimo elemento no final dele
console.log(concept)
