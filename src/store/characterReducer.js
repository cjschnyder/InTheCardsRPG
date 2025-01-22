import { createSlice } from '@reduxjs/toolkit';
import characterInfo from '../assets/characterInfoAndCards.json';

const initialState = {
    name: "",
    species: "",
    starterClass: "",
    priestOption: "",
    gear: [],
    hand: [],
    discard: [],
    discardRest: []
};

const characterReducer = createSlice({
    name: 'character',
    initialState,
    reducers: {
        saveCharacter(state) {
            localStorage.setItem(
                state.name, 
                JSON.stringify({
                    name: state.name, 
                    species: state.species,
                    starterClass: state.starterClass,
                    priestOption: state.priestOption,
                    gear: state.gear,
                    hand: state.hand,
                    discard: state.discard,
                    discardRest: state.discardRest
                })
            );
        },
        createCharacter(state, action) {
            const {
                name,
                species,
                starterClass,
                priestOption,
                gear
            } = action.payload;

            state.name = name;
            state.species = species;
            state.starterClass = starterClass;
            state.priestOption = priestOption;
            state.gear = gear;
            state.discard = initialState.discard;
            state.discardRest = initialState.discardRest;

            const seperatedCard = characterInfo.cards.filter(
                card => (card.source === species || card.source === starterClass || card.source === priestOption || gear.includes(card.source))
            );

            state.hand = seperatedCard.map(card => card.id)
        },
        transferToHand(state, action) {
            const transferedCardId = action.payload;
            state.discard = state.discard.filter(cardId => cardId !== transferedCardId);
            state.discardRest = state.discardRest.filter(cardId => cardId !== transferedCardId);
            state.hand.push(transferedCardId);
        },
        transferToDiscard(state, action) {
            const transferedCardId = action.payload;
            state.hand = state.hand.filter(cardId => cardId !== transferedCardId);
            state.discard.push(transferedCardId);
        },
        transferToDiscardRest(state, action) {
            const transferedCardId = action.payload;
            state.hand = state.hand.filter(cardId => cardId !== transferedCardId);
            state.discardRest.push(transferedCardId);
        },
        newScene(state) {
            state.hand = [
                ...state.hand,
                ...state.discard
            ];
            state.discard = initialState.discard;
        },
        rest(state) {
            state.hand = [
                ...state.hand,
                ...state.discard,
                ...state.discardRest
            ];
            state.discard = initialState.discard;
            state.discardRest = initialState.discardRest;
        },
        loadCharacter(state, action) {
            const {
                name,
                species,
                starterClass,
                priestOption,
                gear,
                hand,
                discard,
                discardRest
            } = action.payload;

            state.name = name;
            state.species = species;
            state.starterClass = starterClass;
            state.priestOption = priestOption;
            state.gear = gear;
            state.hand = hand;
            state.discard = discard;
            state.discardRest = discardRest;
        }
    }
});

export const {
    saveCharacter,
    createCharacter,
    transferToHand,
    transferToDiscard,
    transferToDiscardRest,
    newScene,
    rest,
    loadCharacter
} = characterReducer.actions

export default characterReducer.reducer;