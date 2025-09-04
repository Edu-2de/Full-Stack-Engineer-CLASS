// cSpell:disable

//define 3 variaveis mutaveis e atribui valores a elas
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//cria uma funcao que retorna um numero de 0 a 9
const generateTarget = () =>{
  return Math.floor(Math.random() * 10);
}
//cria uma funcao que recebe tres parametros, o chute do humano, do cumputador e o numero em si, e depois com a math diminui o valor que eles tem que acertar do valor que foi passado
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDifference = Math.abs(targetNumber - humanGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);

  //se o chute do humano for mais perto doque o do pc, ele retorna true, se o do pc for mais perto ele retorna false
  return humanDifference <= computerDifference;
};

//gera o numero que eles tem que tentar adivinhar
const target = generateTarget();
//gera o numero aleatorio do computador de 0 a 9
const computerGuess = Math.floor(Math.random() * 10);

//cria uma funcao que recebe uma stirng de parametro, se for 'human' ele aumenta os pontos do humano em 1, se for o pc ele aumenta os pontos do pc em um 
const updateScore = (string) =>{
  if(string === 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
}

//cria uma funcao que passa o round sempre, ou seja ao final sempre sera um novo round
const advanceRound = () =>{
  currentRoundNumber++;
}