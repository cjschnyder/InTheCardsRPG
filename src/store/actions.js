export function createDeck(level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills) {
  return { type: 'CREATE_DECK', level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills};
}

export function setName(name) {
  return { type: 'SET_NAME', name};
}

export function transferToHand(card) {
  return { type: 'TRANSFER_HAND', card};
}

export function transferToDiscard(card) {
  return { type: 'TRANSFER_DISCARD', card};
}

export function transferToBurnPile(card) {
  return { type: 'TRANSFER_BURN', card};
}

export function transferToDeck(card) {
  return { type: 'TRANSFER_DECK', card};
}

export function resetDeck() {
    return {type: 'RESET_DECK'};
}

export function loadDeck(deck, name) {
    return {type: 'LOAD_DECK', deck, name};
}