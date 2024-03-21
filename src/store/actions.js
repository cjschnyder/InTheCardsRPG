export function saveAttributes() {
  return { type: 'SAVE_ATTRIBUTES'};
}

export function createCharacter(
    name,
    level,
    ancestry,
    starterClass,
    specialtyClassOne,
    specialtyClassTwo,
    skills,
    customCards
    ){
    return { 
        type: 'CREATE_CHARACTER',
        name,
        level,
        ancestry,
        starterClass,
        specialtyClassOne,
        specialtyClassTwo,
        skills,
        customCards
    };
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

export function loadCharacter(
    deck,
    name,
    level,
    ancestry,
    starterClass,
    specialtyClassOne,
    specialtyClassTwo,
    skills
){
    return {
        type: 'LOAD_CHARACTER',
        deck,
        name,
        level,
        ancestry,
        starterClass,
        specialtyClassOne,
        specialtyClassTwo,
        skills
    };
}