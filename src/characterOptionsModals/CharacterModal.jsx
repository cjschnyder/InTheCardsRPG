import {Component} from 'react';
import { connect } from 'react-redux';
import {createCharacter, saveAttributes} from '../store/actions'
import characterInfo from '../assets/characterInfoAndCards.json'; 
import '../style/ModalStructure.scss'
import './CharacterModal.scss'

class CharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || "",
            level: this.props.level || 1,
            ancestry: this.props.ancestry || "",
            starterClass: this.props.starterClass || "",
            specialtyClassOne: this.props.specialtyClassOne || "",
            specialtyClassTwo: this.props.ancestry || "",
            skills: this.props.skills || [
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
            skillsOpen: true,
            priestDomain: ""
        }
    }
    
    render(){
        const {
            createCharacter,
            saveAttributes
        } = this.props
        const {
            name,
            level,
            ancestry,
            starterClass,
            specialtyClassOne,
            specialtyClassTwo,
            skills,
            skillsOpen,
            priestDomain,
        } = this.state

        const clearState = () => {
            this.setState({
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
                skillsOpen: true,
                priestDomain: "",
            })
        }
        
        const saveCharacter = () => {
            const priestDomainCard = [];
            (starterClass === 'priest' && priestDomain) && (
                priestDomainCard.push(
                    {
                        "cardName":characterInfo.starterClasses.priest.specials[priestDomain].cardName,
                        "action": characterInfo.starterClasses.priest.specials[priestDomain].action,
                        "description": characterInfo.starterClasses.priest.specials[priestDomain].description,
                        "from": `${characterInfo.starterClasses.priest.specials[priestDomain].from} ${characterInfo.starterClasses.priest.specials[priestDomain].level}`
                    }
                )
            );
            createCharacter(name, level, ancestry, starterClass, specialtyClassOne, specialtyClassTwo, skills, priestDomainCard); //Replace priestDomain Card with Custom eventually
            saveAttributes();
            clearState();
            location.replace("/character-sheet");
        };
        
        return(
            <div className={`modal-wrapper`}>
                <div className='modal-title'>
                    <h2>{this.props.name ? 'Edit Character' : 'Create a New Character'}</h2>
                </div>
                <div className='modal-body'>
                    <div className='modal-option'>
                        <span>Character Name: </span>
                        <div className='modal-input'>
                            <input
                                value={name}
                                onChange={(e) => {this.setState({name: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className='modal-option'>
                        <span>Character Level: </span>
                        <div className='modal-input'>
                            <select 
                                value={level}
                                onChange={e => this.setState({level: event.target.value})}
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
                                onChange={e => this.setState({ancestry: event.target.value})}
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
                                onChange={e => this.setState({starterClass: event.target.value})}
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
                                    onChange={e => this.setState({priestDomain: event.target.value})}
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
                                onChange={e => this.setState({specialtyClassOne: event.target.value})}
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
                                onChange={e => this.setState({specialtyClassTwo: event.target.value})}
                            >
                                <option selected>-- Select a Class --</option>
                                {Object.keys(characterInfo.specialtyClasses).map(specialtyClassOption => 
                                    <option value={`${specialtyClassOption}`}>{specialtyClassOption.replace(/_/g, " ")}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='modal-option-multi-select'>
                        <div className='dropdown-button' onClick={() => this.setState({skillsOpen: !skillsOpen}) }>
                            <h3>Skills</h3>
                            <span className={`arrow ${skillsOpen ? 'flip' : ''}`}>&#8249;</span>
                        </div>
                        <div className={`dropdown-list ${skillsOpen ? '' : 'hide'}`}>
                            {
                                skills.map((skill, index) =>
                                    <div className='skill'>
                                        <span>{skill.skillName.replace(/_/g, " ")}</span>
                                        <select
                                            value={skill.value}
                                            onChange={e => this.setState({
                                                skills: [
                                                    ...skills.slice(0, index),
                                                    {skillName: skill.skillName, value: event.target.value, trait: skill.trait},
                                                    ...skills.slice(index + 1)
                                                ]           
                                            })}
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
                        <div className='button' onClick={() => saveCharacter()}>
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
}

export default connect(null,{
    createCharacter: createCharacter,
    saveAttributes: saveAttributes
})(CharacterModal);