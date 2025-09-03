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

const getComputerChoice = ()=>{
  let choice = Math.floor(Math.random() * 3);
  if (choice == 1){
    choice = 'rock'
  }else if(choice == 2){
     choice ='paper'
  }else{
      choice = 'scissors'
  }
  return choice;
}
let userInput = getUserChoice('rock'); 
let choice = getComputerChoice();
console.log(`Voce escolheu${userInput} e a máquina escolheu ${choice}`)
