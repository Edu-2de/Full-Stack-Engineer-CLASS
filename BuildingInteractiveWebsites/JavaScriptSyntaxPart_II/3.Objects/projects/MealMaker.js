// cSpell:disable

//cria um objeto menu
let menu = {
  _meal: '',
  _price: 0,
  
  //cria um metodo setter para o price, para caso o parametro passado no setter for do tipo number, entao ele dfine o _price como aquele number, se nao for um numero entao ele imprime a frase "Por favor, insira um nome de refeição válido."
   set price(priceToCheck) {
    if(typeof priceToCheck === 'number'){
      this._price = priceToCheck
    }else {
      console.log("Por favor, insira um nome de refeição válido.");
    }
  },

  //cria um metodo setter para o meal, para caso o parametro passado no setter for do tipo string, entao ele dfine o _price como aquela string, se nao for uma string entao ele imprime a frase "Por favor, insira um nome de refeição válido."
  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string'){
      this._meal = mealToCheck
    }else {
      console.log("Por favor, insira um nome de refeição válido.");
    }
  },


  get todaysSpecial(){
    if (this._meal && this._price){
      console.log(`O Especial de Hoje é ${this._meal} por US ${this._price} dols.`)
    }else{
      consolo.log('Meal or price was not set correctly!')
    }

  }


}
menu.meal = "Pizza";
menu.price = 10;

console.log(menu.todaysSpecial)

