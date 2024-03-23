import characterInfo from '../assets/characterInfoAndCards.json';

const initialState = {
    name: "",
    level: 1,
    ancestry: "",
    starterClass: "",
    specialtyClassOne: "",
    specialtyClassTwo: "",
    skills: [
        {skillName: 'appraise' , value: ""},
        {skillName: 'arcane_magic' , value: ""},
        {skillName: 'athletics' , value: ""},
        {skillName: 'elemental_magic' , value: ""},
        {skillName: 'engineering' , value: "",},
        {skillName: 'finesse' , value: ""},
        {skillName: 'history' , value: ""},
        {skillName: 'manipulation' , value: ""},
        {skillName: 'medicine' , value: ""},
        {skillName: 'melee_attack' , value: ""},
        {skillName: 'nature' , value: ""},
        {skillName: 'perception' , value: ""},
        {skillName: 'ranged_attack' , value: ""},
        {skillName: 'read_intent' , value: ""},
        {skillName: 'reflexes' , value: ""},
        {skillName: 'resist_manipulation' , value: ""},
        {skillName: 'social_knowledge' , value: ""},
        {skillName: 'spiritual_magic' , value: ""},
        {skillName: 'stealth' , value: ""},
        {skillName: 'toughness' , value: ""}
    ],
    burn: [],
    deck: [],
    discard: [],
    hand: []
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
                    starterClass: state.starterClass, 
                    specialtyClassOne: state.specialtyClassOne, 
                    specialtyClassTwo: state.specialtyClassTwo, 
                    skills: state.skills,
                })
            );
            return {
                ...state
            }
        case 'CREATE_CHARACTER':
            const ancestryCards = [];
            const starterClassCards = [];
            const specialtyClassOneCards = [];
            const specialtyClassTwoCards = [];
            
            action.ancestry && Object.entries(characterInfo.ancestries[action.ancestry]).forEach(entry => {
                const [ancestryLevel, info] = entry;
                if (action.level >= ancestryLevel) {
                    info.cards && ancestryCards.push(...info.cards);
                }
            });
            
            action.starterClass && Object.entries(characterInfo.starterClasses[action.starterClass]).forEach(entry => {
                const [classLevel, info] = entry;                                                                                
                if (action.level >= classLevel) {
                    starterClassCards.push(...info.cards);
                }
            })
                
            if(action.specialtyClassOne) {
                const classTwo = Object.values(characterInfo.specialtyClasses[action.specialtyClassOne]);
                
                if (action.level >= 3) {
                    classTwo[0].cards && specialtyClassOneCards.push(...classTwo[0].cards);
                }
            
                if (action.level >= 6) {
                    classTwo[1].cards && specialtyClassOneCards.push(...classTwo[1].cards);
                }
            }
            
            if (action.specialtyClassTwo) {
                const classThree = Object.values(characterInfo.specialtyClasses[action.specialtyClassTwo]);
                
                if (action.level >= 5) {
                    classThree[0].cards && specialtyClassOneCards.push(...classThree[0].cards);
                }
            
                if (action.level >= 8) {
                    classThree[1].cards && specialtyClassOneCards.push(...classThree[1].cards);
                }
            }
            
            const characterSkillCards = action.skills.reduce((skillCards, skill) => {
                if (skill.value === "novice") {
                    return (characterInfo.skills[skill.skillName].cards.filter(card => card.level === "novice") && 
                        [...skillCards, ...characterInfo.skills[skill.skillName].cards.filter(card => card.level === "novice")]
                    )
                } else if (skill.value === "journeyman") {
                    return [...skillCards, ...characterInfo.skills[skill.skillName].cards.filter(card => card.level === "novice" || card.level === "journeyman")]
                } else if (skill.value === "master") {
                    return [...skillCards, ...characterInfo.skills[skill.skillName].cards]
                } else {
                    return [...skillCards]
                }
            }, []);
            
            const fullDeck = [
                ...ancestryCards,
                ...starterClassCards,
                ...specialtyClassOneCards,
                ...specialtyClassTwoCards,
                ...characterSkillCards,
                ...action.customCards
            ];
                
            return {
                hand: initialState.hand,
                discard: initialState.deck,
                burn: initialState.burn,
                name: action.name,
                level: action.level,
                ancestry: action.ancestry,
                starterClass: action.starterClass, 
                specialtyClassOne: action.specialtyClassOne, 
                specialtyClassTwo: action.specialtyClassTwo,
                skills: action.skills,
                deck: fullDeck
            }
        case 'TRANSFER_HAND':
            console.log(action.card);
            return {
                ...state,
                deck: state.deck.filter(card => card != action.card), //this is going to cause an issue when decks have duplicate cards it them
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
                name: action.character.name,
                level: action.character.level,
                ancestry: action.character.ancestry,
                starterClass: action.character.starterClass,
                specialtyClassOne: action.character.specialtyClassOne,
                specialtyClassTwo: action.character.specialtyClassTwo,
                skills: action.character.skills,
                priestDomain: action.character.priestDomain,
                deck: action.character.deck
            }
        default:
            return state;
    }
}

export default rootReducer;