// cSpell:disable

//cria uma variavel imutavel com o valor Nala
const name = 'Nala';

//cria uma funcao que pega uma numero aleatorio de 0 a 2, se for 0 retorna 'Marathon', se for 1 retorna: 'Triathlon', se for 2 retorna: 'Pentathlon'.
//Para pegar um evento aleatorio
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


//cria uma funcao que recebe dois parametros, days e event, se event for igual a 'Marathon', entao ele define a variavel days como 50, e assim por diante...
//Para de acordo com o evento ele dizer qunatos dias sao...
const getTrainingDays = (days, event) => {

  if (event === 'Marathon') {
     days = 50;
  } else if (event === 'Triathlon') {
     days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }
//retorna o novo valor de days, conforme o if acima
  return days;
};

// cria uma funcao que recebe name e event como parametros e os printa em uma frase juntos
const logEvent =  (name,event) => {
  console.log(`${name}'s event is: ${event}`);
};
// cria uma funcao que recebe name e days como parametros e os printa em uma frase juntos
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

//define que event vai ser a chamada da funcao getRandEvent, que pegara um evento aleatorio
const event = getRandEvent();
//define que days vai ser a chamada da funcao getTrainingDays, que de acordo com o evento ele pegara quantos dias sao
const days = getTrainingDays( event);

//imprime o nome da pessoa e o evento
logEvent(name, event);
//imprime o nome da pessoa e os dias
logTime(name, days);

//a mesma coisa da parte de cima so que com outra pessoa
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
