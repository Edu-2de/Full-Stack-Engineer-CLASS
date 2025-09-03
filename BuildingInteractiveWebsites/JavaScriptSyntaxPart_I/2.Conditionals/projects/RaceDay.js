// cSpell:disable

//define a variavel mutavel como um numero aleatorio
let raceNumber = Math.floor(Math.random() * 1000);

//define a variavel mutavel com estado inicial de false
let chegoucedo = false;

//define a variavel mutavel como a idade
let age = 19;

//se a idade for maior que 18 e chegoucedo for igual a true, ira aumentar o racenumber em 1000 e mostrara 'Voce vai correr as 9h30 corredor numero '+ raceNumber
if(age > 18 && chegoucedo === true){
  raceNumber += 1000;
  console.log('Voce vai correr as 9h30 corredor numero '+ raceNumber)

//se a idade for maior que 18 e chegoucedo for igual a false, mostrara 'Voce vai correr as 11h corredor numero '+ raceNumber
}else if(age > 18 && chegoucedo === false){
   console.log('Voce vai correr as 11h corredor numero '+ raceNumber)

//se for diferente das opcoes acima mostrara: 'Voce vai correr as 12h30 corredor numero '+ raceNumber
}else{
    console.log('Voce vai correr as 12h30 corredor numero '+ raceNumber)
}

