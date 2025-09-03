// cSpell:disable

//O valor salvo kelvinpermanecerá constante.
const kelvin = 0

//Celsius é semelhante a Kelvin — a única diferença é que Celsius é 273um grau menor que Kelvin.
const celsius = kelvin - 273

//No próximo passo, arredondaremos o número salvo para fahrenheit. Escolha o tipo de variável que permite que você altere seu valor.

//Use o .floor()método do objeto Math embutido para arredondar para baixo a temperatura Fahrenheit. Salve o resultado na fahrenheitvariável.
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)

