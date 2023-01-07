import * as cards from '../assets/cardPacks.js';

const initialState = {
    burn: [],
    deck: [],
    discard: [],
    hand: [],
    name: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                name: action.name
            }
        case 'CREATE_DECK':
            const ancestryCards = cards.allAncestryCards[action.ancestry].filter(item => item.level <= parseInt(action.level));
            console.log(ancestryCards);
            return {
                deck: [
                    ...ancestryCards
                ]
            }
            
        default:
            return state;
    }
}

export default rootReducer;