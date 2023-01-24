import * as cards from '../assets/cardPacks.js';

const initialState = {
    burn: [],
    deck: [],
    discard: [],
    handFull: false,
    hand: [],
    name: "",
    ancestry: "",
    level: 1,
    classOne: "",
    classTwo: "",
    classThree: "",
    characterFiveSkills: [],
    characterTenSkills: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ATTRIBUTES':
            localStorage.setItem(
                state.name, 
                JSON.stringify({
                        name: state.name, 
                        level: state.level,
                        ancestry: state.ancestry,
                        classOne: state.classOne, 
                        classTwo: state.classTwo, 
                        classThree: state.classThree, 
                        characterFiveSkills: state.characterFiveSkills, 
                        characterTenSkills: state.characterTenSkills, 
                        deck: state.deck
                })
            );
            return {
                ...state
            }
        case 'CREATE_DECK':
            const ancestryCards = action.ancestry ?
                  cards.allAncestryCards[action.ancestry].filter(item => item.level <= parseInt(action.level))
            :
                [];
            const classOneCards = action.classOne ? 
                cards.allClassOneCards[action.classOne].filter(item => item.level <= parseInt(action.level))
            :
                [];
            const classTwoCards = action.classTwo ?
                  cards.allClassTwoCards[action.classTwo].filter(item => item.level <= parseInt(action.level))
            :
                [];
            const classThreeCards = action.classThree ?
                  cards.allClassTwoCards[action.classTwo].filter(item => item.level <= parseInt(action.level))
            :
                [];
            const fiveSkillCards = [];
            action.fiveSkills.map(skill => fiveSkillCards.push(cards.allFiveSkillCards[skill]));
            const tenSkillCards = [];
            action.tenSkills.map(skill => tenSkillCards.push(cards.allTenSkillCards[skill]));
            const fullDeck = [
                ...ancestryCards,
                ...classOneCards,
                ...classTwoCards,
                ...classThreeCards,
                ...fiveSkillCards,
                ...tenSkillCards
            ];
                
            return {
                burn: initialState.burn,
                discard: initialState.discard,
                hand: initialState.hand,
                name: action.name,
                level: action.level,
                ancestry: action.ancestry,
                classOne: action.classOne,
                classTwo: action.classTwo,
                classThree: action.classThree,
                characterFiveSkills: action.fiveSkills,
                characterTenSkills: action.tenSkills,
                deck: fullDeck
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
        case 'LOAD_DECK':
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
                characterFiveSkills: action.fiveSkills,
                characterTenSkills: action.tenSkills,
                deck: action.deck
            }
        default:
            return state;
    }
}

export default rootReducer;