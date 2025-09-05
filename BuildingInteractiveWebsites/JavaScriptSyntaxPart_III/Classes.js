// cSpell:disable

// cria a classe Dog que tem um constructor para instanciar um objeto com name e behavior, so precisa passar o name
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  // getters para acessar name e behavior (como se fossem "propriedades privadas")
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   
  // método que aumenta em 1 o valor de behavior
  incrementBehavior() {
    this._behavior ++;
  }
}
// cria um novo objeto da classe Dog chamado Halley
const halley = new Dog('Halley');
console.log(halley.name); // imprime o valor de name
console.log(halley.behavior); // imprime o valor de behavior
halley.incrementBehavior(); // incrementa behavior em 1
console.log(halley.name); // imprime novamente name
console.log(halley.behavior); // imprime novamente behavior




// cria a classe Surgeon que precisa de name e department para instanciar um objeto
class Surgeon{
  constructor(name, department){
    this.name = name;
    this.department = department;
  }
}



// cria a classe Surgeon que precisa de name e department para instanciar um objeto
class Surgeon1 {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
//cria objetos da classe Surgeon1 chamados surgeonRomero e surgeonJackson
const surgeonRomero = new Surgeon1('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon1('Ruth Jackson', 'Orthopedics')