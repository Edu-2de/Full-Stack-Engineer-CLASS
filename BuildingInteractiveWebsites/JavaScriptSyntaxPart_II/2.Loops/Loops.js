// cSpell:disable

// cria um array em uma variavel chamada vacationSpots
let vacationSpots = ['new York', 'sao Paulo', 'buenos Aires']
//imprime o 1, 2 e 3 item da array
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])




//cria um loop que comeca em 5 e caba no 11, diz que toda vez que vai passar pelo loop, ele aumenta em um o contador
for(let counter = 5; counter <= 11; counter++){
  //imprime o contador toda vez, o que fara ele printar de 5 ate 11
  console.log(counter);
}




//cria um loop que comeca em 3 e vai ate 0, so que dessa vez diminuindo o contador, contagem regressiva
for (let counter = 3; counter >= 0; counter--) {
  //imprime de 3 a 0
  console.log(counter);
}




//cria um array com 3 itens chamado vacationSpots1
const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];

//cria um loop que comeca em 0 e vai ate ser menot que o tamanho do array vacationSpots1, ou seja vai de 0 a 3 (pois o array tem 3 itens, entao ele ira de 0 a 2, oque aparecera 3 mensagens na tela), aumentando cada vez o contador
for (let i = 0; i < vacationSpots1.length; i++){
  //imprime a mensagem 3 vezes, pegando o indice correspondente ao contador no array
  console.log('I would love to visit ' + vacationSpots1[i]);
}




//cria 3 arrays, sendo que um deles esta vazio
let bobsFollowers = ['Rob', 'Bob', 'Lob', 'Tob'];
let tinasFollowers = ['Rob', 'Bob', 'Gina',];
let mutualFollowers = [];

//cria um loop que comeca em 0 e vai ate ser menor que o array bobsFollowers, ou seja vai de 0 a 3, aumentando o contador em 1 cada vez
for (let i = 0; i < bobsFollowers.length; i++) {
  //cria um loop dentro do loop que comeca em 0 e vai ate ser menor que o array tinasFollowers, ou seja de 0 a 2, aumentando o contador em 1 cada vez
  for (let j = 0; j < tinasFollowers.length; j++) {
    //cria um if para que caso o indice, ou seja o item do array for igual nos dois arrays, entao ele vai colocar um item desses no array mutualFollowers
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
//printa a lista com os itens que tem nos dois arrays
console.log(mutualFollowers)




//cria um array 
const cards = ['diamond', 'spade', 'heart', 'club'];
// cria uma variavel com uma string vazia
let currentCard = '';
//diz que enquanto o currentCard for diferente de spade ele ira transformar a variavel currentCard em um item aleatorio da array cards
while (currentCard !== 'spade'){ 
  currentCard = cards[Math.floor(Math.random() * 4)];
  //imprime a variavel que foi alterada
  console.log(currentCard)
}




//cria duas variaveis com dois valores diferentes
let cupsOfSugarNeeded = 10;
let cupsAdded = 0;
//diiz para aumentar em 1 o cupsAdded, enquanto cupsAdded for menor que cupsOfSugarNeeded
do {
  cupsAdded +=1
}while(cupsAdded < cupsOfSugarNeeded){
  //imprime o valor de cupsOfSugarNeeded
  console.log(cupsAdded)
}