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




// cria a classe Surgeon que precisa de name e department para instanciar um objeto
// nao precisa colocar o terceiro elemento quando for instaciar pois ja tem um valor default para ele, no caso 20
class Surgeon2 {
  constructor(name, department, remainingVacationDays) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
    //metodo get que retorna o nome do objeto
    get name(){
      return this._name;
    }
    //metodo get que retorna o departamento do objeto
    get department() {
    return this._department;
    }
    //metodo get que retorna o remainingVacationDays do objeto
    get remainingVacationDays() {
    return this._remainingVacationDays;
  }
}
//cria objetos da classe Surgeon1 chamados surgeonRomero e surgeonJackson
const surgeonRomero2 = new Surgeon2('Francisco Romero', 'Cardiovascular');
const surgeonJackson2 = new Surgeon2('Ruth Jackson', 'Orthopedics');




// cria a classe Surgeon que precisa de name e department para instanciar um objeto
// nao precisa colocar o terceiro elemento quando for instaciar pois ja tem um valor default para ele, no caso 20
class Surgeon3 {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  //metodo get que retorna o nome do objeto
  get name() {
    return this._name;
  }
  //metodo get que retorna o departamento do objeto
  get department() {
    return this._department;
  }
  //metodo get que retorna o remainingVacationDays do objeto
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  //funcao que voce precisa passar uma variavel daysOff na chamada dela, ela pega o valor que temos no nosso objeto em _remainingVacationDays e diminui do valor que voce passar em daysOff
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
//cria objetos da classe Surgeon1 chamados surgeonRomero e surgeonJackson
const surgeonRomero3 = new Surgeon3('Francisco Romero', 'Cardiovascular');
const surgeonJackson3 = new Surgeon3('Ruth Jackson', 'Orthopedics');
//depois de criar os objetos ele chama a funcao takeVacationDays para o objeto surgeonRomero3 e passa o valor 3
surgeonRomero3.takeVacationDays(3);
//imprime _remainingVacationDays daquele objeto
console.log(surgeonRomero3.remainingVacationDays())
