// cSpell:disable

//cria um gupo de testes, nesse caso o nome seria matematica
describe('Math', () =>{
  //cria outro grupo dentrod e matematica para os testes de minimo, que tera os testes equivalentes a isso
  describe('.min', () =>{
    //cria um teste que diz  que deve retornar o argumento com menor valor
    it('returns the argument with the lowest value' , () =>{
      
    })
  })
})




// importa o assert
const assert = require('assert')
//cria um grupo de testes chamdo +
describe('+', () => {
  //cria um teste dentro do grupo que deve retornar a soma dos argumentos
  it('returns the sum of its arguments', () => {
    // assert.ok() verifica se a expressão é verdadeira
    // se 3 + 4 === 7 -> passa
    // se não, o teste falha
    assert.ok(3 + 4 === 7);

  });
});
