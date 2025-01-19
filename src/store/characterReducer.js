import { createSlice } from '@reduxjs/toolkit';
import characterInfo from '../assets/characterInfoAndCards.json';

const initialState = {
    name: "",
    level: 1,
    species: "",
    starterClass: "",
    priestOption: "",
    gear: [],
    hand: [],
    discard: []
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
                    discard: state.discard
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
            state.discard = initialState.discard;
        },
        transferHand(state, action) {
            const transferedCard = action.payload;
            state.deck = state.deck.filter(card => card.cardName != transferedCard.cardName); 
            state.discard = state.discard.filter(card => card.cardName != transferedCard.cardName);
            state.burn = state.burn.filter(card => card.cardName != transferedCard.cardName);
            state.hand.push(transferedCard);
        },
        transferDiscard(state, action) {
            const transferedCard = action.payload;
            state.deck = state.deck.filter(card => card.cardName != transferedCard.cardName);
            state.hand = state.hand.filter(card => card.cardName != transferedCard.cardName);
            state.burn = state.burn.filter(card => card.cardName != transferedCard.cardName);
            state.discard.push(transferedCard);
        },
        resetDeck(state) {
            state.hand = [
                ...state.hand,
                ...state.discard,
            ];
            state.discard = initialState.discard;
        },
        loadCharacter(state, action) {
            const {
                name,
                species,
                starterClass,
                priestOption,
                gear,
                hand,
                discard
            } = action.payload;

            state.name = name;
            state.species = species;
            state.starterClass = starterClass;
            state.priestOption = priestOption;
            state.gear = gear;
            state.hand = hand;
            state.discard = discard;
        }
    }
});

export const {
    saveCharacter,
    createCharacter,
    transferHand,
    transferDiscard,
    resetDeck,
    loadCharacter
} = characterReducer.actions

export default characterReducer.reducer;