// cSpell:disable

//faz uma funcao de pegar a escolha do usuario, e aceita ela como paramtero, em userInput
const getUserChoice = (userInput)=>{

  //transforma o userinput todo para minusculo, para evitar erros
  userInput = userInput.toLowerCase();

  //se o user input for igual a rock, paper ou scissors, ele retorna a escolha do usuario
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  
  //se nao for rock, paper ou scissors ele retorna no console a string erro
  }else{
    return console.log('Error')
  }
}

//faz uma funcao de pegar a escolha do computador
const getComputerChoice = ()=>{

  //cria uma variavel mutavel com um numero aletorio, de 0 a 2
  let choice = Math.floor(Math.random() * 3);

  //se for 1 a choice, entao sera rock
  if (choice == 1){
    choice = 'rock'

  //se for 2 a choice, entao sera paper
  }else if(choice == 2){
     choice ='paper'

  //se nao for nem 1 nem 2, ele sera scissors 
  }else{
      choice = 'scissors'
  }
  return choice;
}

//aqui ele definea esocolha do usuario
let userInput = getUserChoice('rock'); 

//chama a funcao para a escolha do pc
let choice = getComputerChoice();

//mostra no console tanto a escolha do usuario quanto do pc
console.log(`Voce escolheu${userInput} e a máquina escolheu ${choice}`)
