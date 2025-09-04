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

  //cria um metodo getter, que caso tanto o _meal quanto o _price estiverem com valores definidos entao ele imprime `O Especial de Hoje é ${this._meal} por US ${this._price} dols.`, se algum dos dois estiver faltando ele imprime 'Meal or price was not set correctly!'
  get todaysSpecial(){
    if (this._meal && this._price){
      console.log(`O Especial de Hoje é ${this._meal} por US ${this._price} dols.`)
    }else{
      consolo.log('Meal or price was not set correctly!')
    }

  }
}

//define que o meal tem valor de pizza e que o preco tem valor de 10
menu.meal = "Pizza";
menu.price = 10;
//chama o getter no console
console.log(menu.todaysSpecial)

