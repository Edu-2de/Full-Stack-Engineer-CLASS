// cSpell:disable

//cria uma variavel com uma historia
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nack" and it stretches all the way from Riverside Park in Manhattan to South Nack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenroom Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
//divide a historia por espacos
let storyWords = story.split(' ');
//inicia o contador com 0
let count = 0;
//cria uma variavel word
let word;
//cria uma variavel que armazena a palavra literalmente
let unnecessaryWord= 'literally';
//cria uma variavel que armazena bonito
let misspelledWord = 'beautiful';
//cria uma variavel que armazena freaking
let badWord = 'freaking';
//faz com que para cada palavra que passar ele aumente em um o contador
storyWords.forEach(word =>
{
  count +=1; 
});

//junta a historia, tirando os espacos
console.log(storyWords.join(''))
//imprime o contador
console.log(count)
//atualiza o array tirando as palvaras desnecessarias
storyWords = storyWords.filter(word => word !== unnecessaryWord);

//atualiza o array substituindo a misspelledWord por beautiful
storyWords = storyWords.map((word) => {
  if(word == misspelledWord){
    return 'beautiful'
  }else{
    return word
  }
});

//acha o index de freaking
let badWordIndex = storyWords.findIndex(word => word === 'freaking')
//troca a palavra do index 78 para really
storyWords[78] = 'really';
//troca a palavra do index 111 para stunning
storyWords[111] = "stunning";

//imprime a palavra 111 e a historia toda completa tambem
console.log(storyWords[111])
console.log(storyWords)



