// cSpell:disable

//define uma variavel imutavel chamada city com o valor 'New York City'
const city = 'New York City'
//funcao que cria uma variavel mutavel e retorna ela junto com a variavel imutavel que definimos acima
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
//chama a funcao, que vai imprimir a frase completa
console.log(logCitySkyline())



//define 3 variaveis imutaveis
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//cria uma funcao que retorna as 3 variaveis mais uma breve frase antes
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
//chama a funcao direto no console, que ira imprimir a fras
console.log(callMyNightSky())



//cria uma funcao que cria uma variavel e a imprime
function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves)
}
//chama a funcao
logVisibleLightWaves()
//da erro aqui, pois esta chamando a variavel que so esta criada dentro da funcao, entao o certo seria chamar a funcao em si
console.log(lightWaves)



//define 3 variaveis imutaveis
const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
const stars1 = 'North Star';
//tenta mudar a variavel imutavel, oque dara erro, pois nao pode se mudar o valor da variavel
const callMyNightSky = () => {
  stars1 = 'Sirius';
	return 'Night Sky: ' + satellite1 + ', ' + stars1 + ', ' + galaxy1;
};
//chma a funcao direto no console
console.log(callMyNightSky());
//imprime o valor da variavel stars1 dentro do console
console.log(stars1)



//cria uma funcao de seta que cria duas variaveis mutaveis
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  //adiciona um if para caso region for igual a 'The Arctic', trocar o valor de lightWaves para  'Northern Lights'
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    //imprime o novo valor de lightwaves
    console.log(lightWaves)
  }
  //imprime o valor antigo da variavel ou seja  'Moonlight', porque so alterou o valor dela dentro do if
  console.log(lightWaves);
};
//chama a funcao
logVisibleLightWaves();