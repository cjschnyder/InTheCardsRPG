import { createSlice } from '@reduxjs/toolkit';
import characterInfo from '../assets/characterInfoAndCards.json';

const initialState = {
    name: "",
    level: 1,
    species: "",
    starterClass: "",
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
                    level: state.level,
                    species: state.species,
                    starterClass: state.starterClass, 
                    hand: state.hand,
                    discard: state.discard
                })
            );
        },
        createCharacter(state, action) {
            const {
                name,
                level,
                species,
                starterClass,
            } = action.payload;

            state.hand = [];
            
            ancestry && Object.entries(characterInfo.species[species]).forEach(entry => {
                const [ancestryLevel, info] = entry;
                if (level >= ancestryLevel) {
                    info.cards && state.deck.push(...info.cards);
                }
            });
            
            starterClass && Object.entries(characterInfo.starterClasses[starterClass]).forEach(entry => {
                const [classLevel, info] = entry;                                                                                
                if (level >= classLevel) {
                    info.cards && state.deck.push(...info.cards);
                }
            })
                
            state.name = name;
            state.level = level;
            state.species = species;
            state.starterClass = starterClass; 
            state.hand =  initialState.hand;
            state.discard =  initialState.deck;
        },
        transferHand(state, action) {
            const transferedCard = action.payload;
            state.deck = state.deck.filter(card => card.cardName != transferedCard.cardName); //this is going to cause an issue when decks have duplicate cards it them
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
                level,
                species,
                starterClass,
                hand,
                discard
            } = action.payload;

            state.name = name;
            state.level = level;
            state.species = species;
            state.starterClass = starterClass;
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