export function saveAttributes() {
  return { type: 'SAVE_ATTRIBUTES'};
}

export function createDeck(name, level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills) {
  return { type: 'CREATE_DECK', name, level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills};
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

export function loadDeck(deck, name, level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills) {
    return {type: 'LOAD_DECK', deck, name, level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills};
}