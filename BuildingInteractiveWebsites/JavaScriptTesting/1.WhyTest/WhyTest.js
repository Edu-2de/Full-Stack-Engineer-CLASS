// cSpell:disable

const {assert} = require('chai'); 
// Importa a biblioteca "chai", usada para fazer asserções nos testes (comparar resultados esperados com resultados reais)

describe('User visits index', () => {
  // Descreve o conjunto de testes: "Usuário visita a página inicial"
  
  describe('to post an order', () => {
    // Subgrupo de testes: "para fazer um pedido"
    
    /*
     * Primeiro comportamento esperado:
     * A página começa com o formulário de pedido vazio.
     */
    it('starts with an empty order (Behavior 1)', () => {
      browser.url('/'); // Acessa a página inicial do app

      // Verifica que todos os campos do pedido estão vazios
      assert.equal(browser.getText('#deliver-to span'), '');
      assert.equal(browser.getText('#cake-type span'), '');
      assert.equal(browser.getText('#fillings span'), '');
      assert.equal(browser.getText('#size span'), '');
    });

    /*
     * Segundo comportamento esperado:
     * Quando um nome é digitado e enviado, ele deve aparecer no pedido.
     */
    it('displays the submitted name (Behavior 2)', () => {
      const name = 'Hungry Person'; // Nome que será testado

      browser.url('/');
      browser.setValue('#name', name); // Preenche o campo de nome
      browser.click('#submit-order'); // Clica em "Place Order"
      browser.url('/'); // Recarrega a página (simulando comportamento real)

      // Verifica que o nome digitado aparece no campo "Deliver to"
      assert.include(browser.getText('#deliver-to'), name);
    });

    /*
     * Terceiro comportamento esperado:
     * Se enviar o formulário com o nome vazio, o sistema não deve sobrescrever o nome anterior.
     */
    it('does not overwrite name if blank name submitted (Behavior 3)', () => {
      const name = 'Hungry Person';

      browser.url('/');
      browser.setValue('#name', name);
      browser.click('#submit-order');
      browser.url('/');
      browser.click('#submit-order'); // Submete de novo sem preencher nome
      browser.url('/');

      // Verifica que o nome antigo continua
      assert.include(browser.getText('#deliver-to'), name);
    });

    /*
     * Quarto comportamento esperado:
     * Ao escolher um tipo de bolo, ele deve aparecer no pedido.
     */
    it('displays the selected cake type (Behavior 4)', () => {
      const cakeType = 'Whole Wheat';

      browser.url('/');
      browser.click('#whole-wheat'); // Seleciona o bolo "Whole Wheat"
      browser.click('#submit-order'); 
      browser.url('/');

      // Verifica se o tipo de bolo aparece
      assert.include(browser.getText('#cake-type'), cakeType);
    });

    /*
     * Quinto comportamento esperado:
     * Deve ser possível selecionar múltiplos recheios, e todos devem aparecer no pedido.
     */
    it('displays multiple fillings (Behavior 5)', () => {
      const firstChoice = 'Strawberries';
      const secondChoice = 'Banana';

      browser.url('/');
      browser.click('#strawberries'); // Marca recheio de morango
      browser.click('#banana'); // Marca recheio de banana
      browser.click('#submit-order');
      browser.url('/');

      // Verifica que os dois recheios estão listados
      assert.include(browser.getText('#fillings'), firstChoice);
      assert.include(browser.getText('#fillings'), secondChoice);
    });

    /*
     * Sexto comportamento esperado:
     * Ao escolher o tamanho da pilha de panquecas, deve aparecer o número correspondente.
     * Exemplo: "Septuple Stack" = "7".
     */
    it('displays the number equivalent to the stack size (Behavior 6)', () => {
      const optionText = 'Septuple Stack'; // Texto exibido no menu
      const optionNum = '7'; // Número equivalente

      browser.url('/');
      browser.selectByVisibleText('#select-stack', optionText) // Seleciona a opção
      browser.click('#submit-order');
      browser.url('/');

      // Verifica se o número aparece corretamente
      assert.include(browser.getText('#size'), optionNum);
    });
	});
});
