import { useState } from 'react';
import characterInfo from '../assets/characterInfoAndCards.json'; 
import { createCharacter, saveCharacter } from '../store/characterReducer';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import '../style/ModalStructure.scss'
import './CharacterCreator.scss'

export const CharacterCreator = () => {

    const useAction = useDispatch();
    const characterName = location.search.replace("?", "");
    const character = JSON.parse(localStorage.getItem(characterName));
    const species = [
        {value: "dwarf", label: "Dwarf"},
        {value: "faeling", label: "Faeling"},
        {value: "goblin", label: "Goblin"},
        {value: "human", label: "Human"}
    ];
    const classes = [
        {value: "fighter", label: "Fighter"},
        {value: "leader", label: "Leader"},
        {value: "mage", label: "Mage"},
        {value: "naturalist", label: "Naturalist"},
        {value: "physician", label: "Physician"},
        {value: "priest", label: "Priest"},
        {value: "rogue", label: "Rogue"},
        {value: "warlock", label: "Warlock"}
    ];
    const priestOptions = [
        {value: "healing", label: "Healing"},
        {value: "righteousness", label: "Righteousness"},
        {value: "shadows", label: "Shadows"}
    ];
    const gearAndWeapons =[
        {value: "spike", label: "Spike"},
        {value: "sword", label: "Sword"},
        {value: "spear", label: "Spear"},
        {value: "hammer", label: "Hammer"},
        {value: "axe", label: "Axe"},
        {value: "great_axe", label: "Great Axe"},
        {value: "great_sword", label: "Great Sword"},
        {value: "pike", label: "Pike"},
        {value: "war_hammer", label: "War Hammer"},
        {value: "bow", label: "Bow"},
        {value: "crossbow", label: "Crossbow"},
        {value: "shield", label: "Shield"}
    ];

    const [name, setName] = useState(character && character.name ? character.name : "");
    const [characterSpecies, setSpecies] = useState(character && character.species ? character.species : "");
    const [starterClass, setStarterClass] = useState(character && character.starterClass ? character.starterClass : "");
    const [priestOption, setPriestOption] = useState(character && character.priestOption ? character.priestOption : []);
    const [gear, setGear] = useState(character && character.cards ? character.cards : []);

    const clearState = () => {
        setName("");
        setSpecies("");
        setStarterClass("");
        setPriestOption("");
        setGear([]);
    };
        
    const saveCharacterValues = () => {        
        useAction(createCharacter({name, characterSpecies, starterClass, priestOption, gear}));
        useAction(saveCharacter());
        clearState();
        location.replace("/character-sheet");
    };
    
    return(
        <div className={`modal-wrapper`}>
            <div className='modal-title'>
                <h2>{character && character.name ? 'Edit Character' : 'Create a New Character'}</h2>
            </div>
            <div className='modal-body'>
                <div className='modal-option'>
                    <span>Character Name: </span>
                    <div className='modal-input'>
                        <input
                            value={name}
                            onChange={e => {setName(e.target.value)}}
                        />
                    </div>
                </div>
                <div className='modal-option'>
                    <span>Starter Class: </span>
                    <div className='modal-input'>
                        <Select 
                            options={species}
                            value={characterSpecies}
                            onChange={setSpecies}
                        />
                    </div>
                </div>
                <div className='modal-option'>
                    <span>Species: </span>
                    <div className='modal-input'>
                        <Select 
                            options={classes}
                            value={starterClass}
                            onChange={setStarterClass}
                        />
                    </div>
                </div>
                {
                    starterClass === 'priest' &&
                    <div className='modal-option'>
                        <span>Diety's Domain: </span>
                        <div className='modal-input'>
                            <Select 
                                options={priestOptions}
                                value={priestOption}
                                onChange={setPriestOption}
                            />
                        </div>
                    </div>
                }
                <div className='modal-option'>
                    <span>Gear & Weapons: </span>
                    <div className='modal-input'>
                        <Select 
                            isMulti
                            options={gearAndWeapons}
                            value={gear}
                            onChange={setGear}
                        />
                    </div>
                </div>
                <div className='horizontal-buttons'>
                    <div className='button' onClick={() => saveCharacterValues()}>
                        Save
                    </div>
                    <div className='button' onClick={() => clearState()}>
                        Clear
                    </div>
                </div>
            </div>
        </div>
    )
}