// cSpell:disable


//faz uma funcao para pegar as horas de sono, e pega como parametro o dia da semana
let getSleepHours = (day) =>{

  //define um numero aleatorio de 1 a 7
  let numeroAleatorio = Math.floor(Math.random() * 9) + 1;

  //se a pessoa nao digitar um dia da semana certo, entao exibira "Dia inválido"
  switch (day.toLowerCase()){ 
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
          console.log(`${day} voce dormiu ${numeroAleatorio} horas `);
          break;
      default:
          console.log("Dia inválido");
  }
}

//chama a funcao de pegar horas de sono, com o dia da semana que voce quiser
getSleepHours('monday');