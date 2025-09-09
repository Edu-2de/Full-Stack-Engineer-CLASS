// cSpell:disable

// Classe base School
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;                    // nome da escola
    this._level = level;                  // nível (primary, middle, high)
    this._numberOfStudents = numberOfStudents; // número de estudantes
  }

  // getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // setter com validação
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  // método que imprime informações rápidas sobre a escola
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    );
  }

  // método estático para escolher professor substituto
  static pickSubstituteTeacher(substituteTeachers) {
    const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
  }
}

// Classe de ensino fundamental (PrimarySchool)
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents); // chama o construtor da classe pai
    this._pickupPolicy = pickupPolicy;        // política de retirada
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Classe de ensino médio (HighSchool)
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents); // chama o construtor da classe pai
    this._sportsTeams = sportsTeams;       // times esportivos
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

// ---------- TESTES ----------

// cria instância de PrimarySchool
const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

// imprime quickFacts()
lorraineHansbury.quickFacts();

// escolhe professor substituto
console.log(
  School.pickSubstituteTeacher([
    'Jamal Crawford',
    'Lou Williams',
    'J. R. Smith',
    'James Harden',
    'Jason Terry',
    'Manu Ginobli'
  ])
);

// cria instância de HighSchool
const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
]);

// imprime os times esportivos
alSmith.sportsTeams;
