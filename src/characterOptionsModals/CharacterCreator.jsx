import {useState} from 'react';
import characterInfo from '../assets/characterInfoAndCards.json'; 
import { createCharacter, saveCharacter } from '../store/characterReducer';
import { useDispatch } from 'react-redux';
import '../style/ModalStructure.scss'
import './CharacterCreator.scss'

export const CharacterCreator = (props) => {

    const useAction = useDispatch();

    const characterName = location.search.replace("?", "");
    const character = JSON.parse(localStorage.getItem(characterName))

    const [name, setName] = useState(character && character.name ? character.name : "");
    const [level, setLevel] = useState(character && character.level ? character.level : 1);
    const [ancestry, setAncestry] = useState(character && character.ancestry ? character.ancestry : "");
    const [starterClass, setStarterClass] = useState(character && character.starterClass ? character.starterClass : "");
    const [specialtyClassOne, setSpecialtyClassOne] = useState(character && character.specialtyClassOne ? character.specialtyClassOne : "");
    const [specialtyClassTwo, setSpecialtyClassTwo] = useState(character && character.specialtyClassTwo ? character.specialtyClassTwo : "");
    const [skills, setSKills] = useState(character && character.skills ? character.skills : [
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
    ]);
    const [priestDomain, setPriestDomain] = useState(character && character.priestDomain ? character.priestDomain : "");

    const clearState = () => {
        setName("");
        setLevel(1);
        setAncestry("");
        setStarterClass("");
        setSpecialtyClassOne("");
        setSpecialtyClassTwo("");
        setSKills([
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
        ]);
        setPriestDomain("");
    };
        
    const saveCharacterValues = () => {
        const priestDomainCard = (starterClass === 'priest' && priestDomain) &&
            {
                "cardName":characterInfo.starterClasses.priest.specials[priestDomain].cardName,
                "action": characterInfo.starterClasses.priest.specials[priestDomain].action,
                "description": characterInfo.starterClasses.priest.specials[priestDomain].description,
                "from": `${characterInfo.starterClasses.priest.specials[priestDomain].from} ${characterInfo.starterClasses.priest.specials[priestDomain].level}`
            }
        
        useAction(createCharacter({name, level, ancestry, starterClass, specialtyClassOne, specialtyClassTwo, skills, priestDomainCard}));
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
                    <span>Character Level: </span>
                    <div className='modal-input'>
                        <select 
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                        >
                            <option value='1' selected>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='4'>Four</option>
                            <option value='5'>Five</option>
                            <option value='6'>Six</option>
                            <option value='7'>Seven</option>
                            <option value='8'>Eight</option>
                        </select>
                    </div>
                </div>
                <div className='modal-option'>
                    <span>Ancestry: </span>
                    <div className='modal-input'>
                        <select 
                            value={ancestry}
                            onChange={e => setAncestry(e.target.value)}
                        >
                            <option selected>-- Select an Ancestry --</option>
                            {Object.keys(characterInfo.ancestries).map(ancestryOption => 
                                <option value={`${ancestryOption}`}>{ancestryOption.replace(/_/g, " ")}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className='modal-option'>
                    <span>Starter Class: </span>
                    <div className='modal-input'>
                        <select 
                            value={starterClass}
                            onChange={e => setStarterClass(e.target.value)}
                        >
                            <option selected>-- Select a Class --</option>
                            {Object.keys(characterInfo.starterClasses).map(starterClassOption => 
                                <option value={`${starterClassOption}`}>{starterClassOption.replace(/_/g, " ")}</option>
                            )}
                        </select>
                    </div>
                </div>
                {
                    starterClass === 'priest' &&
                    <div className='modal-option'>
                        <span>Diety's Domain: </span>
                        <div className='modal-input'>
                            <select 
                                value={priestDomain}
                                onChange={e => setPriestDomain(e.target.value)}
                            >
                                <option selected>-- Select your Diety's Domain --</option>
                                {Object.keys(characterInfo.starterClasses.priest.specials).map(priestOption => 
                                    <option value={`${priestOption}`}>{priestOption.replace(/_/g, " ")}</option>
                                )}
                            </select>
                        </div>
                    </div>
                }
                <div className={`modal-option ${level >= 3 ? '' : 'hide'}`}>
                    <span>First Specialty Class: </span>
                    <div className='modal-input'>
                        <select 
                            value={specialtyClassOne}
                            onChange={e => setSpecialtyClassOne(e.target.value)}
                        >
                            <option selected>-- Select a Class --</option>
                            {Object.keys(characterInfo.specialtyClasses).map(specialtyClassOption => 
                                <option value={`${specialtyClassOption}`}>{specialtyClassOption.replace(/_/g, " ")}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className={`modal-option ${level >= 5 ? '' : 'hide'}`}>
                    <span>Second Specialty Class: </span>
                    <div className='modal-input'>
                        <select 
                            value={specialtyClassTwo}
                            onChange={e => setSpecialtyClassTwo(e.target.value)}
                        >
                            <option selected>-- Select a Class --</option>
                            {Object.keys(characterInfo.specialtyClasses).map(specialtyClassOption => 
                                <option value={`${specialtyClassOption}`}>{specialtyClassOption.replace(/_/g, " ")}</option>
                            )}
                        </select>
                    </div>
                </div>
                <div className='modal-option-multi-select'>
                    <div className='dropdown-button'>
                        <h3>Skills</h3>
                    </div>
                    <div className='dropdown-list'>
                        {
                            skills.map((skill, index) =>
                                <div className='skill'>
                                    <span>{skill.skillName.replace(/_/g, " ")}</span>
                                    <select
                                        value={skill.value}
                                        onChange={e => setSKills(
                                            [
                                                ...skills.slice(0, index),
                                                {skillName: skill.skillName, value: e.target.value},
                                                ...skills.slice(index + 1)
                                            ]           
                                        )}
                                    >
                                        <option value="" selected>-- Untrained --</option>
                                        <option value="novice">Novice</option>
                                        <option value="journeyman">Journeyman</option>
                                        <option value="master">Master</option>
                                    </select>
                                </div>
                            )
                        }
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