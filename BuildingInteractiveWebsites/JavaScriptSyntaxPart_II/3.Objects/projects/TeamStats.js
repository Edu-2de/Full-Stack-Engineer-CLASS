// cSpell:disable

const team = {
  _players: [
    { firstName: 'Pablo', lastName: 'Silva', age: 25 },
    { firstName: 'Lucas', lastName: 'Oliveira', age: 22 },
    { firstName: 'Mariana', lastName: 'Costa', age: 28 }
  ],
  _games: [
    { opponent: 'Warriors', teamPoints: 90, opponentPoints: 85 },
    { opponent: 'Knights', teamPoints: 78, opponentPoints: 80 },
    { opponent: 'Dragons', teamPoints: 102, opponentPoints: 99 }
  ],

  // Getter para players
  get players() {
    return this._players;
  },

  // Getter para games
  get games() {
    return this._games;
  },

  // Método para adicionar jogador
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  // Método para adicionar jogo
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Adicionando novo jogador
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// Adicionando novo jogo
team.addGame('Titans', 100, 98);
console.log(team.games);
