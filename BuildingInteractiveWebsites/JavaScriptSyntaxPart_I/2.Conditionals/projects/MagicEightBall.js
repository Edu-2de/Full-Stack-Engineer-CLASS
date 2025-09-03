// cSpell:disable

//define a variavel mutavel como seu username
let username = 'Edu';

//se o username nao for uma string vazia ele mostra hello mais seu username
if(username){
  console.log('hello' + ' ' + username)
};

//define uma pergunta, como uma variavel mutavel e a imprime em uma frase se a perguna nao for uma string vazia
let userQuestion = 'Vou ser famoso?';
if(userQuestion){
  console.log(username + ' ' + 'perguntou' + ' ' + userQuestion);
}

//define um numero aleatorio usano a biblioteca math
let randomNumber = Math.floor(Math.random() * 8);

//deifne a variavel como uma string vazia, que vai ser a variavel que mostrara a nossa frase
let eightBall = '';

//se o numero aleatroio for igual a 1, 2, 3, 4, 5, 6, 7 ou 8 ele mostra a frase correspondente abaixo, se nao ele nao mostra nada
switch (randomNumber){
  case 1:
    eightBall ='It is certain';
    break;
  case 2:
    eightBall ='It is decidedly so';
     break;
  case 3:
    eightBall ='Reply hazy try again';
     break;
  case 4:
    eightBall ='Cannot predict now';
     break;
  case 5:
    eightBall ='Do not count on it';
     break;
  case 6:
     eightBall ='My sources say no';
     break;
  case 7:
    eightBall ='Outlook not so good';
     break;
  case 8:
    eightBall ='Signs point to yes';
     break;
}

//imprime nossa frase baseada no numero
console.log(eightBall)