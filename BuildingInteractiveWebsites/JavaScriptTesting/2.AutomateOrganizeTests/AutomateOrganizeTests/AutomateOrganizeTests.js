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




//importa o asset
const assert = require('assert');
// cria um array
const arr = ['entry1', 'entry2'];
//cria um grupo de testes para o array
describe('Array.prototype.pop [naive]', () => {
  //cria um teste que deve retornar o ultimo elemnto do array
  it('returns the last element in the array [naive]', () => {
    //se retornar vair aparecer true se nao false
    assert.ok(pop(['padawan', 'knight']) === 'knight'); 
  });
});

// faz o mesmo que acima so que de um jeito diferente
describe(arr.pop(), () => {
  it('returns the last element in the array [3phase]', () => {
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];
    const popped = pop(jediPath);
    assert.ok(popped === knightString);
  });
});





const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);

 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   fs.unlinkSync(path);

 });
});
