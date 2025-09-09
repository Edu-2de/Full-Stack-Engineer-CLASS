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




//Aqui você lança o erro diretamente, sem nenhum try/catch ao redor.
//Quando o JavaScript encontra esse throw, ele interrompe imediatamente a execução e "sobe" o erro.
//Se não existir um try/catch em volta, o erro não será tratado.
//Resultado: o programa para de executar e o console mostra uma mensagem de erro não tratado.
throw Error('Username or password does not match');




//agora nao vai dar um erro no terminal, pois estamos fazendo certo, usando o throw para lancar o erro, em seguida o catch pega o erro e o imprime no console, nao estamos apenas lancando o erro....
try {
  throw Error('This error will get caught');
} catch (e) {
 console.log(e);
}



