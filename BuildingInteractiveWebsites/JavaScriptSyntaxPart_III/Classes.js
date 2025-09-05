// cSpell:disable

//cria a classe dog que tem um constructor para um objeto da classe dog, com o name e o behavior
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  //funcao getter para pegar o name e o behavior, ja que ele é privado
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   
  //funcao que aumenta em um o valor de behavior
  incrementBehavior() {
    this._behavior ++;
  }
}
//cria um novo objeto de dog, Halley
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console





class Surgeon{
  constructor(name, department){
    this.name = name;
    this.department = department;
  }
}