// cSpell:disable

//define a idade como um valor mutavel, com o var
var myAge = 19

let earlyYears = 2
earlyYears *= 10,5

let laterYears = myAge - 2
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

//calcula a idade em anos de cachorro
let myAgeInDogYears = earlyYears + laterYears

//define o seu nome como uma variavel que nao muda
const myName = 'Eduardo'
//deixa o nome todo em minusculo
myName.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`)