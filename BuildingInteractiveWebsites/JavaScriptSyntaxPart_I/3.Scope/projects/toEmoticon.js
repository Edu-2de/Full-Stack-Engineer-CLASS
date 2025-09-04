// cSpell:disable

//cria uma funcao que recebe uma string como parametro, e dependendo da string que passar, ele vai printar no console um dos emotes diferentes
const toEmoticon = (string) =>{
  switch(string){
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
  }
}
//Aqui ira printar '|_(* ~ *)_|'
console.log(toEmoticon("whatever")) 

//Aqui ira printar '|_{"}_|'
console.log(toEmoticon("shrug")) 

//Aqui ira printar ':)'
console.log(toEmoticon("smiley face")) 
