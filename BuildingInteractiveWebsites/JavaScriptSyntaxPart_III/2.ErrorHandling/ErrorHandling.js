// cSpell:disable

//Imprime uma mensagem dizendo que a mesagem sera imprimida no console
console.log('This message will be printed to the console.');
//funcao que vai dar um erro, pois retorna uma variavel nao definida
function throwError () {
  return notDefinedVar;
}
//chama a funcao que vai dar um erro no console
throwError();
//Por causa do erro so a mensagem de cima sera imprimida, essa nao vai
console.log('Because of the error, this will not be printed!');




