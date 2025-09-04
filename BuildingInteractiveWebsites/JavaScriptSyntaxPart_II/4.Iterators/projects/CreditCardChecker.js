// cSpell:disable

// Todos os cartões válidos
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Todos os cartões inválidos
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Cartões que podem ser válidos ou inválidos
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// Array com todos os cartões
const batch = [valid1, valid2, valid3, valid4, valid5, 
               invalid1, invalid2, invalid3, invalid4, invalid5, 
               mystery1, mystery2, mystery3, mystery4, mystery5];

// Função para validar cartão usando algoritmo de Luhn
const validateCred = (cardArray) => {
  let reversed = cardArray.slice().reverse();
  let sum = reversed.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      let doubled = digit * 2;
      if (doubled > 9) doubled -= 9;
      return acc + doubled;
    } else {
      return acc + digit;
    }
  }, 0);
  return sum % 10 === 0;
};

// Função para encontrar cartões inválidos
const findInvalidCards = (cards) => {
  return cards.filter(card => !validateCred(card));
};

// Função para identificar empresas de cartões inválidos
const idInvalidCardCompanies = (invalidCards) => {
  const companies = [];
  invalidCards.forEach(card => {
    switch (card[0]) {
      case 3:
        if (!companies.includes('Amex')) companies.push('Amex');
        break;
      case 4:
        if (!companies.includes('Visa')) companies.push('Visa');
        break;
      case 5:
        if (!companies.includes('MasterCard')) companies.push('MasterCard');
        break;
      case 6:
        if (!companies.includes('Discover')) companies.push('Discover');
        break;
      default:
        console.log('Empresa não encontrada');
    }
  });
  return companies;
};

// Testando as funções
const invalidCards = findInvalidCards(batch);
console.log('Cartões inválidos:', invalidCards);

const companies = idInvalidCardCompanies(invalidCards);
console.log('Empresas com cartões inválidos:', companies);
