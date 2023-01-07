export function createDeck(level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills) {
  return { type: 'CREATE_DECK', level, ancestry, classOne, classTwo, classThree, fiveSkills, tenSkills};
}

export function setName(name) {
  return { type: 'SET_NAME', name};
}