import { createSlice } from '@reduxjs/toolkit';
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

const characterReducer = createSlice({
    name: 'character',
    initialState,
    reducers: {
        saveCharacter(state) {
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
        },
        createCharacter(state, action) {
            const {
                name,
                level,
                ancestry,
                starterClass,
                specialtyClassOne,
                specialtyClassTwo,
                skills,
                priestDomainCard
            } = action.payload;

            state.deck = [];
            
            ancestry && Object.entries(characterInfo.ancestries[ancestry]).forEach(entry => {
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
                
            if(specialtyClassOne) {
                const SpecialtyClass = characterInfo.specialtyClasses[specialtyClassOne];
                
                SpecialtyClass.start.cards && state.deck.push(...SpecialtyClass.start.cards);
            
                if (level >= 6) {
                    SpecialtyClass.upgrade.cards && state.deck.push(...SpecialtyClass.upgrade.cards);
                }
            }
            
            if (specialtyClassTwo) {
                const SpecialtyClass = characterInfo.specialtyClasses[specialtyClassTwo];
                SpecialtyClass.start.cards && state.deck.push(...SpecialtyClass.start.cards);
            
                if (action.level >= 8) {
                    SpecialtyClass.upgrade.cards && state.deck.push(...SpecialtyClass.upgrade.cards);
                }
            }

            state.deck.push(
                ...skills.reduce((skillCards, skill) => {
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
                }, [])
            );
            
            const fullDeck = priestDomainCard ? [...state.deck, priestDomainCard] : [...state.deck] ;
                
            state.hand =  initialState.hand;
            state.discard =  initialState.deck;
            state.burn = initialState.burn;
            state.name = name;
            state.level = level;
            state.ancestry = ancestry;
            state.starterClass = starterClass; 
            state.specialtyClassOne = specialtyClassOne; 
            state.specialtyClassTwo = specialtyClassTwo;
            state.skills = skills;
            state.deck = fullDeck;
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
        transferBurn(state, action) {
            const transferedCard = action.payload;
            state.deck = state.deck.filter(card => card.cardName != transferedCard.cardName);
            state.discard = state.discard.filter(card => card.cardName != transferedCard.cardName);
            state.hand = state.hand.filter(card => card.cardName != transferedCard.cardName);
            state.burn.push(transferedCard);
        },
        transferDeck(state, action) {
            const transferedCard = action.payload;
            state.hand = state.hand.filter(card => card.cardName != transferedCard.cardName);
            state.discard = state.discard.filter(card => card.cardName != transferedCard.cardName);
            state.burn = state.burn.filter(card => card.cardName != transferedCard.cardName);
            state.deck.push(transferedCard);
        },
        resetDeck(state) {
            state.deck = [
                ...state.deck,
                ...state.hand,
                ...state.discard,
                ...state.burn
            ];
            state.hand = initialState.hand;
            state.discard = initialState.deck;
            state.burn = initialState.burn;
        },
        loadCharacter(state, action) {
            const {
                name,
                level,
                ancestry,
                starterClass,
                specialtyClassOne,
                specialtyClassTwo,
                skills,
                deck
            } = action.payload;

            state.hand = initialState.hand;
            state.discard = initialState.deck;
            state.burn = initialState.burn;
            state.name = name;
            state.level = level;
            state.ancestry = ancestry;
            state.starterClass = starterClass;
            state.specialtyClassOne = specialtyClassOne;
            state.specialtyClassTwo = specialtyClassTwo;
            state.skills = skills;
            state.deck = deck;
        }
    }
});

export const {
    saveCharacter,
    createCharacter,
    transferDeck,
    transferHand,
    transferDiscard,
    transferBurn,
    resetDeck,
    loadCharacter
} = characterReducer.actions

export default characterReducer.reducer;