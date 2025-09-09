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




// importa o assert para verificar as condições do teste
const assert = require('assert');
// importa o módulo fs (File System) para manipulação de arquivos
const fs = require('fs');
let path, str;

// cria um grupo de testes para o método appendFileSync
describe('appendFileSync', () => {
  // primeiro teste
  it('cria um novo arquivo com uma string de texto', () => {
    // --- Setup: prepara variáveis ---
    path = './message.txt';   // caminho do arquivo
    str = 'Hello Node.js';    // conteúdo que será escrito
    // --- Exercício: escreve no arquivo ---
    fs.appendFileSync(path, str);
    // --- Verificação: lê o conteúdo e compara com a string ---
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
    // --- Teardown: remove o arquivo para não deixar lixo ---
    fs.unlinkSync(path);
  });

  // segundo teste
  it('cria um novo arquivo com uma string vazia', () => {
    // --- Setup ---
    path = './message.txt';
    str = '';   // string vazia
    // --- Exercício ---
    fs.appendFileSync(path, str);
    // --- Verificação ---
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
    // --- Teardown ---
    fs.unlinkSync(path);
  });
});
