// cSpell:disable

//cria um array com nomes de pintores
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
//faz um foreach para cada pintor da lista, imprimindo na tela 4 vezes a frase is one of my favorite artists.', so mudando o nome no inicio da frase
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
//cria um array com 5 numeros
const numbers = [1, 2, 3, 4, 5];
//faz um .map que percorre cada item da lista e faz uma nova lista, ou seja vai criar uma nova lista so que com os numeros multiplicados por eles mesmos, a lista ficara [1, 4, 9, 16, 25]
const squareNumbers = numbers.map(number => {
  return number * number;
});
//imprime a nova lista feita com o .map
console.log(squareNumbers);
//cria um array com alguns itens
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
//faz um filtro e cria uma nova lista, so com os numero que tem no array
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});
//imprime a nova lista(array) com somente numeros
console.log(onlyNumbers);




//cria um array com algumas frutas
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
//cria um loop com foreach onde imprime 4 frases, cada uma com uma fruta diferente
fruits.forEach(function fruitsiwant(i){
  console.log('I want to eat a '+ i)
})




//cria um array de anaimais
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//cria uma um novo array, so com a primeira letra de cada item do array
const secretMessage = animals.map(item => item[0])
//imprime a mesagem secreta, juntando as letras
console.log(secretMessage.join(''));

//cria um array de numeros
const bigNumbers = [100, 200, 300, 400, 500];
//cria um novo array com .map que pega cada item do array e divide por 100
const smallNumbers = bigNumbers.map(item => item/100)

//imrpime o array de numeros pequenos e a mesnagem screta
console.log(smallNumbers)
console.log(secretMessage)
