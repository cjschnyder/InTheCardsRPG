export function saveAttributes() {
  return { type: 'SAVE_ATTRIBUTES'};
}

export function createCharacter(
    name,
    level,
    ancestry,
    classOne,
    classTwo,
    classThree,
    traits,
    skills,
    currentHealth,
    defense,
    damageReduce,
    priestDomain
    ){
    return { 
        type: 'CREATE_CHARACTER',
        name, 
        level, 
        ancestry, 
        classOne, 
        classTwo, 
        classThree, 
        traits, 
        skills,
        currentHealth,
        defense,
        damageReduce,
        priestDomain
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
    classOne,
    classTwo,
    classThree,
    traits,
    skills,
    health,
    healingRate,
    currentHealth,
    movement,
    defense,
    damageReduce,
    priestDomain
){
    return {
        type: 'LOAD_CHARACTER',
        deck,
        name,
        level,
        ancestry,
        classOne,
        classTwo,
        classThree,
        traits,
        skills,
        health,
        healingRate,
        currentHealth,
        movement,
        defense,
        damageReduce,
        priestDomain
    };
}