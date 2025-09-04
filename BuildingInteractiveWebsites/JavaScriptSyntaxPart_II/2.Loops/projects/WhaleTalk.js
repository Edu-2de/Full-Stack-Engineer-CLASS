// cSpell:disable

//cria uma variavel com uma frase
let input = "The best way to predict the future is to create it.";

//cria um array com as vogais do alfabeto
const vowels = [ 'a', 'e', 'i', 'o', 'u'];
//cria um array vazio
const resultArray = [];

//cria um loop que ira percorrer a nossa frase inpu, passando pelos indices dela
for (let index in input) {
    //cria uma variavel letter que armanezera uma letra de cada vez da nossa frase, e a trasnforamra em minuscluo
    let letter = input[index].toLowerCase(); 

    //faz uma verificacao caso a letra esteja na lista de vogais, entao ele pegara essa letra e ira armazernar ela na lista resultArray
    if (vowels.includes(letter)) { 
        resultArray.push(letter); 
    }
}
//imprime a lista resultArray
console.log(resultArray);