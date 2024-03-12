import {Component} from 'react';
import { connect } from 'react-redux';
import {createCharacter, saveAttributes} from '../store/actions'
import characterInfo from '../assets/characterInfoAndCards.json'; 
import '../style/ModalStructure.scss'
import '../style/CharacterModal.scss'

class CharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || "",
            level: this.props.level || 1,
            ancestry: this.props.ancestry || "",
            background: this.props.background || "",
            starterClass: this.props.starterClass || "",
            specialtyClassOne: this.props.specialtyClassOne || "",
            specialtyClassTwo: this.props.ancestry || "",
            traits: this.props.traits || {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                will: 0,
                charm: 0
            },
            skills: this.props.skills || [
                {skillName: 'appraise' , value: "", trait: 'intelligence'},
                {skillName: 'arcane_magic' , value: "", trait: 'intelligence'},
                {skillName: 'athletics' , value: "", trait: 'strength'},
                {skillName: 'elemental_magic' , value: "", trait: 'will'},
                {skillName: 'finesse' , value: "", trait: 'dexterity'},
                {skillName: 'history' , value: "", trait: 'intelligence'},
                {skillName: 'manipulation' , value: "", trait: 'charm'},
                {skillName: 'medicine' , value: "", trait: 'intelligence'},
                {skillName: 'melee_attack' , value: "", trait: 'strength'},
                {skillName: 'nature' , value: "", trait: 'intelligence'},
                {skillName: 'perception' , value: "", trait: 'intelligence'},
                {skillName: 'ranged_attack' , value: "", trait: 'dexterity'},
                {skillName: 'read_intent' , value: "", trait: 'charm'},
                {skillName: 'reflexes' , value: "", trait: 'dexterity'},
                {skillName: 'resist_manipulation' , value: "", trait: 'will'},
                {skillName: 'social_knowledge' , value: "", trait: 'charm'},
                {skillName: 'spiritual_magic' , value: "", trait: 'will'},
                {skillName: 'stealth' , value: "", trait: 'dexterity'},
                {skillName: 'toughness' , value: "", trait: 'strength'}
            ],
            skillPoints: this.props.skillPoints || 0,
            customCards: [],
            skillsOpen: true,
            priestDomain: "",
            customCardSectionOpen: false,
            cardName: '',
            cardActionType: '',
            cardDescription: '',
            cardOrigin: '',
        }
    }
    
    render(){
        const {
            // isOpen,
            // close,
            createCharacter,
            saveAttributes
        } = this.props
        const {
            name,
            level,
            ancestry,
            background,
            starterClass,
            specialtyClassOne,
            specialtyClassTwo,
            traits,
            skills,
            customCards,
            skillsOpen,
            priestDomain,
            // customCardSectionOpen,
            cardName,
            cardActionType,
            cardDescription,
            cardOrigin,
        } = this.state

        const clearState = () => {
            this.setState({
                name: "",
                level: 1,
                ancestry: "",
                background: "",
                starterClass: "",
                specialtyClassOne: "",
                specialtyClassTwo: "",
                traits: {
                    strength: 0,
                    dexterity: 0,
                    intelligence: 0,
                    will: 0,
                    charm: 0
                },
                skills: [
                    {skillName: 'appraise' , value: "", trait: 'intelligence'},
                    {skillName: 'arcane_magic' , value: "", trait: 'intelligence'},
                    {skillName: 'athletics' , value: "", trait: 'strength'},
                    {skillName: 'elemental_magic' , value: "", trait: 'will'},
                    {skillName: 'finesse' , value: "", trait: 'dexterity'},
                    {skillName: 'history' , value: "", trait: 'intelligence'},
                    {skillName: 'manipulation' , value: "", trait: 'charm'},
                    {skillName: 'medicine' , value: "", trait: 'intelligence'},
                    {skillName: 'melee_attack' , value: "", trait: 'strength'},
                    {skillName: 'nature' , value: "", trait: 'intelligence'},
                    {skillName: 'perception' , value: "", trait: 'intelligence'},
                    {skillName: 'ranged_attack' , value: "", trait: 'dexterity'},
                    {skillName: 'read_intent' , value: "", trait: 'charm'},
                    {skillName: 'reflexes' , value: "", trait: 'dexterity'},
                    {skillName: 'resist_manipulation' , value: "", trait: 'will'},
                    {skillName: 'social_knowledge' , value: "", trait: 'charm'},
                    {skillName: 'spiritual_magic' , value: "", trait: 'will'},
                    {skillName: 'stealth' , value: "", trait: 'dexterity'},
                    {skillName: 'toughness' , value: "", trait: 'strength'}
                ],
                customCards: [],
                skillsOpen: true,
                priestDomain: "",
                customCardSectionOpen: false
            })
        }
        
        // const addCustomCard = (cardName, cardActionType, cardDescription, cardOrigin) => {
        //     this.setState({
        //         customCards: [
        //             ...customCards,
        //             {
        //                 "cardName": cardName,
        //                 "action": cardActionType,
        //                 "description": cardDescription,
        //                 "from": cardOrigin
        //             }
        //         ]
        //     });
        //     console.log(customCards);
        // }
        
        const saveCharacter = () => {
            console.log(characterInfo.starterClasses.priest.specials[priestDomain].cardName);
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
            createCharacter(name, level, ancestry, background, starterClass, specialtyClassOne, specialtyClassTwo, traits, skills, priestDomainCard);
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
                    {/* <div className='traits'>
                        {
                            Object.keys(traits).map(trait => 
                                <div className='trait'>
                                    <span>{trait}</span>
                                    <input
                                        value={traits[trait]}
                                        onChange={e => this.setState({
                                            traits: {
                                                ...traits,
                                                [trait]: parseInt(event.target.value || 0)
                                            }
                                        })}
                                    />
                                </div>
                            )
                        }
                    </div> */}
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
                    {/* <div className='modal-option-multi-select'>
                        <div className='dropdown-button' onClick={() => this.setState({customCardSectionOpen: !customCardSectionOpen}) }>
                            <h3>Add Custom Card</h3>
                            <span className={`arrow ${skillsOpen ? 'flip' : ''}`}>&#8249;</span>
                        </div>
                        <div className={`dropdown-list ${customCardSectionOpen ? '' : 'hide'}`}>
                            <div className='modal-option'>
                            <span>Card Name: </span>
                            <div className='modal-input'>
                                <input
                                    value={cardName}
                                    onChange={(e) => {this.setState({cardName: e.target.value})}}
                                />
                            </div>
                            </div>
                            <div className='modal-option'>
                                <span>Action Type: </span>
                                <div className='modal-input'>
                                    <select 
                                        value={cardActionType}
                                        onChange={e => this.setState({cardActionType: event.target.value})}
                                    >
                                        <option selected>-- Select Action Type --</option>
                                        <option value='Active'>Active</option>
                                        <option value='Active - Burn'>Active - Burn</option>
                                        <option value='Active - One Use'>Active - One Use</option>
                                        <option value='Active - Spell'>Active - Spell</option>
                                        <option value='Active - Spell - Burn'>Active - Spell - Burn</option>
                                        <option value='Active - Spell - One Use'>Active - Spell - One Use</option>
                                        <option value='Triggered'>Triggered</option>
                                        <option value='Triggered - Burn'>Triggered - Burn</option>
                                        <option value='Triggered - One Use'>Triggered - One Use</option>
                                        <option value='Triggered - Spell'>Triggered - Spell</option>
                                        <option value='Triggered - Spell - Burn'>Triggered - Spell - Burn</option>
                                        <option value='Triggered - Spell - One Use'>Triggered - Spell - One Use</option>
                                        <option value='Passive'>Passive</option>
                                        <option value='Passive - Spell'>Passive - Spell</option>
                                    </select>
                                </div>
                            </div>
                            <div className='modal-option'>
                            <span>Card Origin: </span>
                            <div className='modal-input'>
                                <input
                                    value={cardOrigin}
                                    onChange={(e) => {this.setState({cardOrigin: e.target.value})}}
                                />
                            </div>
                            </div>
                            <div className='modal-option'>
                                <span>Card Description: </span>
                                <div className='modal-input'>
                                    <textarea
                                        value={cardDescription}
                                        onChange={(e) => {this.setState({cardDescription: e.target.value})}}
                                    />
                                </div>
                            </div>
                            <div className='horizontal-buttons'>
                                <div className='button' onClick={() => addCustomCard()}>
                                    Add Card
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='added-cards'>
                    {
                        customCards.map(card => 
                            <div>Custom Card: {card.cardName}</div>
                        )
                    }
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