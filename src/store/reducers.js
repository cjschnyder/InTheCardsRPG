import characterInfo from '../assets/characterInfoAndCards.json'; 

const initialState = {
    name: "",
    level: 1,
    ancestry: "",
    background: "",
    starterClass: "",
    specialtyClassOne: "",
    specialtyClassTwo: "",
    traits: {
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        will: 0,
        charm: 0
    },
    skills: [
        {skillName: 'animal_handling', value: 0, trait: 'will'},
        {skillName: 'appraise' , value: 0, trait: 'intelligence'},
        {skillName: 'athletics' , value: 0, trait: 'strength'},
        {skillName: 'finesse' , value: 0, trait: 'dexterity'},
        {skillName: 'history' , value: 0, trait: 'intelligence'},
        {skillName: 'magic_knowledge' , value: 0, trait: 'intelligence'},
        {skillName: 'magic_school_arcane' , value: 0, trait: 'intelligence'},
        {skillName: 'magic_school_creation' , value: 0, trait: 'charm'},
        {skillName: 'magic_school_divine' , value: 0, trait: 'will'},
        {skillName: 'magic_school_elemental' , value: 0, trait: 'will'},
        {skillName: 'manipulation' , value: 0, trait: 'charm'},
        {skillName: 'medicine' , value: 0, trait: 'intelligence'},
        {skillName: 'melee_attack' , value: 0, trait: 'strength'},
        {skillName: 'nature' , value: 0, trait: 'intelligence'},
        {skillName: 'perception' , value: 0, trait: 'intelligence'},
        {skillName: 'ranged_attack' , value: 0, trait: 'dexterity'},
        {skillName: 'read_intent' , value: 0, trait: 'charm'},
        {skillName: 'reflexes' , value: 0, trait: 'dexterity'},
        {skillName: 'resist_manipulation' , value: 0, trait: 'will'},
        {skillName: 'resist_poison' , value: 0, trait: 'strength'},
        {skillName: 'social_knowledge' , value: 0, trait: 'charm'},
        {skillName: 'stealth' , value: 0, trait: 'dexterity'},
        {skillName: 'toughness' , value: 0, trait: 'strength'}
    ],
    health: 0,
    healingRate: 0,
    currentHealth: 0,
    movement: 0,
    defense: 0,
    damageResist: 0,
    burn: [],
    deck: [],
    discard: [],
    hand: [],
    skillPoints: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ATTRIBUTES':
            localStorage.setItem(
                state.name, 
                JSON.stringify({
                        deck: state.deck,
                        name: state.name, 
                        level: state.level,
                        ancestry: state.ancestry,
                        background: state.background,
                        starterClass: state.starterClass, 
                        specialtyClassOne: state.specialtyClassOne, 
                        specialtyClassTwo: state.specialtyClassTwo, 
                        traits: state.traits, 
                        skills: state.skills,
                        health: state.health,
                        healingRate: state.healingRate,
                        currentHealth: state.currentHealth,
                        movement: state.movement,
                        defense: state.defense,
                        damageReduce: state.damageReduce,
                        priestDomain: state.priestDomain
                })
            );
            return {
                ...state
            }
        case 'CREATE_CHARACTER':
            let characterHealth = 0;
            let characterMovement = 0;
            const ancestryCards = [];
            const starterClassCards = [];
            const specialtyClassOneCards = [];
            const specialtyClassTwoCards = [];
            const skillCards = [];
            
            action.ancestry && Object.entries(characterInfo.ancestries[action.ancestry]).forEach(entry => {
                const [ancestryLevel, info] = entry;
                if (action.level >= ancestryLevel) {
                    characterHealth = characterHealth + info.health;
                    info.movement && (characterMovement = characterMovement + info.movement);
                    info.cards && ancestryCards.push(...info.cards);
                }
            });
            
            action.starterClass && Object.entries(characterInfo.starterClasses[action.starterClass]).forEach(entry => {
                const [classLevel, info] = entry;                                                                                
                if (action.level >= classLevel) {
                    characterHealth = characterHealth + info.health;
                    info.movement && (characterMovement = characterMovement + info.movement);
                    starterClassCards.push(...info.cards);
                }
            })
                
            if(action.specialtyClassOne) {
                const classTwo = Object.values(characterInfo.specialtyClasses[action.specialtyClassOne]);
                
                if (action.level >= 3) {
                    characterHealth = characterHealth + classTwo[0].health;
                    classTwo[0].movement && (characterMovement = characterMovement + classTwo[0].movement);
                    classTwo[0].cards && specialtyClassOneCards.push(...classTwo[0].cards);
                }
            
                if (action.level >= 6) {
                    characterHealth = characterHealth + classTwo[1].health;
                    classTwo[1].movement && (characterMovement = characterMovement + classTwo[1].movement);
                    classTwo[1].cards && specialtyClassOneCards.push(...classTwo[1].cards);
                }
            }
            
            if (action.specialtyClassTwo) {
                const classThree = Object.values(characterInfo.specialtyClasses[action.specialtyClassTwo]);
                
                if (action.level >= 5) {
                    characterHealth = characterHealth + classThree[0].health;
                    classThree[0].movement && (characterMovement = characterMovement + classThree[0].movement);
                    classThree[0].cards && specialtyClassOneCards.push(...classThree[0].cards);
                }
            
                if (action.level >= 8) {
                    characterHealth = characterHealth + classThree[1].health;
                    classThree[1].movement && (characterMovement = characterMovement + classThree[1].movement);
                    classThree[1].cards && specialtyClassOneCards.push(...classThree[1].cards);
                }
            }
            
            action.skills.map(skill => {
                if (parseInt(skill.value) + parseInt(action.traits[skill.trait]) >= 5) {
                   characterInfo.skills[skill.skillName][0].cardName && skillCards.push(characterInfo.skills[skill.skillName][0])
                }
                if (parseInt(skill.value) + parseInt(action.traits[skill.trait]) >= 10) {
                    characterInfo.skills[skill.skillName][1].cardName && skillCards.push(characterInfo.skills[skill.skillName][1])
                }
                if (skill.skillName === 'toughness') {
                    characterHealth = characterHealth + parseInt(skill.value) + parseInt(action.traits[skill.trait]);
                }
            });
            
            const fullDeck = [
                ...ancestryCards,
                ...starterClassCards,
                ...specialtyClassOneCards,
                ...specialtyClassTwoCards,
                ...skillCards,
                ...action.customCards
            ];
                
            return {
                hand: initialState.hand,
                discard: initialState.deck,
                burn: initialState.burn,
                name: action.name,
                level: action.level,
                background: action.background,
                ancestry: action.ancestry,
                starterClass: action.starterClass, 
                specialtyClassOne: action.specialtyClassOne, 
                specialtyClassTwo: action.specialtyClassTwo,
                traits: action.traits,
                skills: action.skills,
                health: characterHealth,
                healingRate: Math.floor(characterHealth/4),
                currentHealth: action.currentHealth ? action.currentHealth : characterHealth,
                movement: characterMovement,
                deck: fullDeck
            }
        case 'SET_CURRENT_HEALTH':
            console.log(action)
            let newCurrentHealth = action.currentHealth;
            action.equation === 'add' ?
                newCurrentHealth = newCurrentHealth + parseInt(action.value) :
                newCurrentHealth = newCurrentHealth - parseInt(action.value)
            return {
                ...state,
                currentHealth: newCurrentHealth
            }
        case 'TRANSFER_HAND':
            return {
                ...state,
                deck: state.deck.filter(card => card != action.card),
                discard: state.discard.filter(card => card != action.card),
                burn: state.burn.filter(card => card != action.card),
                hand: [
                    ...state.hand,
                    action.card
                ]
            }
        case 'TRANSFER_DISCARD':
            return {
                ...state,
                deck: state.deck.filter(card => card != action.card),
                hand: state.hand.filter(card => card != action.card),
                burn: state.burn.filter(card => card != action.card),
                discard: [
                    ...state.discard,
                    action.card
                ]
            }
        case 'TRANSFER_BURN':
            return {
                ...state,
                deck: state.deck.filter(card => card != action.card),
                discard: state.discard.filter(card => card != action.card),
                hand: state.hand.filter(card => card != action.card),
                burn: [
                    ...state.burn,
                    action.card
                ]
            }
        case 'TRANSFER_DECK':
            return {
                ...state,
                hand: state.hand.filter(card => card != action.card),
                discard: state.discard.filter(card => card != action.card),
                burn: state.burn.filter(card => card != action.card),
                deck: [
                    ...state.deck,
                    action.card
                ]
            }
        case 'RESET_DECK':
            const sortedDeck = [
                ...state.deck,
                ...state.hand,
                ...state.discard,
                ...state.burn
            ];
            
            return {
                ...state,
                deck: sortedDeck,
                hand: initialState.hand,
                discard: initialState.deck,
                burn: initialState.burn
            }
        case 'LOAD_CHARACTER':
            return {
                hand: initialState.hand,
                discard: initialState.deck,
                burn: initialState.burn,
                name: action.name,
                level: action.level,
                ancestry: action.ancestry,
                classOne: action.classOne,
                classTwo: action.classTwo,
                classThree: action.classThree,
                traits: action.traits,
                skills: action.skills,
                health: action.health,
                healingRate: action.healingRate,
                currentHealth: action.currentHealth,
                movement: action.movement,
                defense: action.defense,
                damageReduce: action.damageReduce,
                priestDomain: action.priestDomain,
                deck: action.deck
            }
        default:
            return state;
    }
}

export default rootReducer;