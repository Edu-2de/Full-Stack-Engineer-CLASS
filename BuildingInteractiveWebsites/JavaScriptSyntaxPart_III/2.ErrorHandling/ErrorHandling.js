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




//Vai imprimir no console, como se fosse um erro, que o usario nao tem nome, esta faltando o nome do usuario
console.log(new Error('User missing name'));
//ira imprimir essa frese abaixo no console, pois nao sera um erro inesperado, um erro que estamos imprimindo mesmo, entao noa ira fazer o codigo parar no meio
console.log('Will logging the error stop our program from running?');




//vai dar um erro mesmo no console, mas porque estamos usando errado a propriedade de mostrar um erro na tela...
throw Error('Username or password does not match');

