export const saveAttributes = () => ({
  type: 'SAVE_ATTRIBUTES'
});

export const createCharacter = (
  name,
  level,
  ancestry,
  starterClass,
  specialtyClassOne,
  specialtyClassTwo,
  skills,
  customCards
    ) => ({
    type: 'CREATE_CHARACTER',
    name,
    level,
    ancestry,
    starterClass,
    specialtyClassOne,
    specialtyClassTwo,
    skills,
    customCards
});

export const transferToHand = (card) => ({
  type: 'TRANSFER_HAND', 
  card
});

export const transferToDiscard = (card) => ({
  type: 'TRANSFER_DISCARD',
  card
});

export const transferToBurnPile = (card) => ({
  type: 'TRANSFER_BURN',
  card
});

export const transferToDeck = (card) => ({
  type: 'TRANSFER_DECK',
  card
});

export const resetDeck = () => ({
    type: 'RESET_DECK'
});

export const loadCharacter = (character) => ({
  type: 'LOAD_CHARACTER',
  character
});
