import { useState } from 'react';
import { createCharacter, saveCharacter } from '../store/characterReducer';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import '../style/PageStructure.scss'
import './CharacterCreator.scss'

export const CharacterCreator = () => {

    const useAction = useDispatch();
    const characterName = location.search.replace("?", "");
    const character = JSON.parse(localStorage.getItem(characterName));
    const speciesList = [
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
    const [species, setSpecies] = useState(character && character.species ? character.species : "");
    const [starterClass, setStarterClass] = useState(character && character.starterClass ? character.starterClass : "");
    const [priestOption, setPriestOption] = useState(character && character.priestOption ? character.priestOption : "");
    const [gear, setGear] = useState(character && character.cards ? character.cards : []);

    const updateSpecies = (selected) => {
        setSpecies(selected.value);
    };
    const updateStarterClass = (selected) => {
        setStarterClass(selected.value);
    };
    const updatePriestOption = (selected) => {
        setPriestOption(selected.value);
    };
    const updateGear = (selected) => {
        setGear(selected.map(item => {
            return item.value
        }));
    };

    const clearState = () => {
        setName("");
        setSpecies("");
        setStarterClass("");
        setPriestOption("");
        setGear([]);
    };
        
    const saveCharacterValues = () => {        
        useAction(createCharacter({name, species, starterClass, priestOption, gear}));
        useAction(saveCharacter());
        clearState();
        location.replace("/character-sheet");
    };
    
    return(
        <div className={`content-wrapper`}>
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
                    <span>Species: </span>
                    <div className='modal-input'>
                        <Select 
                            options={speciesList}
                            value={speciesList.filter(item => item.value === species)}
                            onChange={updateSpecies}
                        />
                    </div>
                </div>
                <div className='modal-option'>
                    <span>Starter Class: </span>
                    <div className='modal-input'>
                        <Select 
                            options={classes}
                            value={classes.filter(item => item.value === starterClass)}
                            onChange={updateStarterClass}
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
                                value={priestOptions.filter(item => item.value === priestOption)}
                                onChange={updatePriestOption}
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
                            value={gearAndWeapons.filter(item => gear.includes(item.value))}
                            onChange={updateGear}
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