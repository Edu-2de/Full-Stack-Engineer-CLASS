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




//cria uma array de numeros
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
//cria uma funcao com filter que retrona so numeros menores que 250
const smallNumbers1 = randomNumbers.filter(number => {
  return number < 250;
})

//cria um array de strings
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
//cria uma funcao com filter que so retrona strings com mais de 7 caracteres
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})




//cria um array de strings, com animais
const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
//cria uma funcao que acha e retorna o index de elephant na lista
const foundAnimal = animals1.findIndex(animal =>{
  return animal == 'elephant';
})
//cria uma funcao que acha e retorna o index da primeira palavra que comeca com s no array 
const startsWithS = animals1.findIndex(animal =>{
  return animal[0] == 's';
})
//chama as variaveis que armazenam as funcoess
console.log(startsWithS)
console.log(foundAnimal)




//cria um array de numeros
const newNumbers = [1, 3, 5, 7];
//cria uma funcao com reduce, que aceita dois parametros, 
//accumalator que definimos ali embaixo que comeca em 10
//e o currentValue que seria o valor em si na lista, como 1, 3, 5
//entao a cada vez que ele faz o loop ele soma o acumulator com o current value, ou seja, 10 + 1, 11 + 3, 14 + 5.....
const newSum = newNumbers.reduce((accumulator,currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
  console.log(newSum)
}, 10);




//cria um array de palavras
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//chma a funcao some no console, que verifica se alguma das palavras de words tem menos de 6 caracteres, se pelo menos uma tiver ele retorna true, se nao false
console.log(words.some((word) => {
  return word.length < 6;
}));
//chma a funcao filter que cria um novo array com somente palavras com mais de 5 caracteres
const interestingWords = words.filter((word) => {
  return word.length > 5;
})
//verifica se todas as palavras tem mais de 5 caracteres, se tiver entao ele retorna true, se nao retrona false
console.log(interestingWords.every((word) => {
  return word.length > 5;
}));




//cria um array de cidades
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
//cria um array de numeros
const nums = [1, 50, 75, 200, 350, 525, 1000];

//para cada cidade imprime a frase Have you visited  mais o nome da cidade
cities.forEach(city => console.log('Have you visited ' + city + '?'));
//cria um novo array com as cidades que tem mais de 7 caracteres
const longCities = cities.filter(city => city.length > 7);

//comecando com a letra c, junta cada primeira letra do array, ou seja, C + O + D + E... e assim por diante
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
//imprime a plavra criada
console.log(word)

//faz um novo array com cada numero tirando 5 do valor
const smallerNums = nums.map(num => num - 5);
//se pelo menos um numero for menor que zero ele retorna true
nums.some(num => num < 0);
