// cSpell:disable

// Classe base que contém propriedades e métodos comuns a todas as mídias
class Media {
  constructor(title) {
    this._title = title;                 // título da mídia
    this._isCheckedOut = false;          // status se está emprestado ou não (default = false)
    this._ratings = [];                  // array de avaliações (vazio inicialmente)
  }

  // getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // setter para alterar o status de emprestado
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  // método que inverte o status de emprestado
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // método que retorna a média das avaliações
  getAverageRating() {
    if (this.ratings.length === 0) return 0; // evita divisão por zero
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum / this.ratings.length;
  }

  // método que adiciona uma nova avaliação
  addRating(rating) {
    if (rating >= 1 && rating <= 5) { // valida que o rating seja entre 1 e 5
      this._ratings.push(rating);
    } else {
      console.log("A avaliação deve estar entre 1 e 5");
    }
  }
}

// Subclasse Livro
class Book extends Media {
  constructor(author, title, pages) {
    super(title);        // chama o construtor da classe pai para definir o título
    this._author = author;
    this._pages = pages;
  }

  // getters específicos do livro
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Subclasse Filme
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);       // chama o construtor da classe pai para definir o título
    this._director = director;
    this._runTime = runTime;
  }

  // getters específicos do filme
  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Subclasse CD
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);        // chama o construtor da classe pai para definir o título
    this._artist = artist;
    this._songs = songs; // array de músicas
  }

  // getters específicos do CD
  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  // método extra: embaralhar as músicas
  shuffle() {
    return this._songs.sort(() => Math.random() - 0.5);
  }
}

// ---------- TESTES ----------

// cria instância de livro
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// altera o status de emprestado
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // true

// adiciona avaliações
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// imprime média
console.log(historyOfEverything.getAverageRating()); // 4.666...

// cria instância de filme
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // true

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // 2.333...

// cria instância de CD
const myCd = new CD('Daft Punk', 'Random Access Memories', ['Give Life Back to Music', 'Get Lucky', 'Lose Yourself to Dance']);
console.log(myCd.songs); // lista original
console.log(myCd.shuffle()); // lista embaralhada
