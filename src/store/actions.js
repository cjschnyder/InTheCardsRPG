export function saveAttributes() {
  return { type: 'SAVE_ATTRIBUTES'};
}

export function createCharacter(
    name,
    level,
    ancestry,
    background,
    starterClass,
    specialtyClassOne,
    specialtyClassTwo,
    traits,
    skills,
    customCards
    ){
    return { 
        type: 'CREATE_CHARACTER',
        name,
        level,
        ancestry,
        background,
        starterClass,
        specialtyClassOne,
        specialtyClassTwo,
        traits,
        skills,
        customCards
    };
}

export function setCurrentHealth(currentHealth, equation, value) {
  return { type: 'SET_CURRENT_HEALTH', currentHealth, equation, value};
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
    background,
    starterClass,
    specialtyClassOne,
    specialtyClassTwo,
    traits,
    skills,
    health,
    healingRate,
    currentHealth,
    movement
){
    return {
        type: 'LOAD_CHARACTER',
        deck,
        name,
        level,
        ancestry,
        background,
        starterClass,
        specialtyClassOne,
        specialtyClassTwo,
        traits,
        skills,
        health,
        healingRate,
        currentHealth,
        movement
    };
}