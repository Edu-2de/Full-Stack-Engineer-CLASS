// cSpell:disable

//cria um array com diversas palavras
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//tira a ultima palavra do nosso array
secretMessage.pop();
//coloca mais duas palavras novas no nosso array
secretMessage.push('to', 'Program')
//define que o 8 item do nosso array sera 'right'
secretMessage[7] = 'right';
//remove o primeiro elemento do nosso array
secretMessage.shift();
//adiciona como primeiro elemento do array 'Programming'
secretMessage.unshift('Programming');
//altera nosso array, deixara somente os items 7 a 11, e adicionara know ao array tambem
secretMessage.splice([6], [10], 'know');

//printa o array depois da alteracao
console.log(secretMessage);
//printa o array com espacos entre as palavras, para formar uma frase
console.log(secretMessage.join(' '));