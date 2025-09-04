// cSpell:disable


let menu = {
  _meal: '',
  _price: 0,

   set price(priceToCheck) {
    if(typeof priceToCheck === 'number'){
      this._price = priceToCheck
    }else {
      console.log("Por favor, insira um nome de refeição válido.");
    }
  },

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

