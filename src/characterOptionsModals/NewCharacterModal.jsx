import {Component} from 'react';
import { connect } from 'react-redux';
import {createCharacter, saveAttributes} from '../store/actions'
import '../style/ModalStructure.scss'
import '../style/CharacterModal.scss'

class NewCharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            level: 1,
            ancestry: "",
            classOne: "",
            classTwo: "",
            classThree: "",
            traits: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                will: 0,
                charm: 0
            },
            skills: [
                {skillName: 'animal_handling', value: 0, trait: 'will'},
                {skillName: 'appraise' , value: 0, trait: 'intelligence'},
                {skillName: 'athletics' , value: 0, trait: 'strength'},
                {skillName: 'finesse' , value: 0, trait: 'dexterity'},
                {skillName: 'history' , value: 0, trait: 'intelligence'},
                {skillName: 'magic_knowledge' , value: 0, trait: 'intelligence'},
                {skillName: 'magic_school_arcane' , value: 0, trait: 'intelligence'},
                {skillName: 'magic_school_creation' , value: 0, trait: 'charm'},
                {skillName: 'magic_school_divine' , value: 0, trait: 'will'},
                {skillName: 'magic_school_elemental' , value: 0, trait: 'will'},
                {skillName: 'manipulation' , value: 0, trait: 'charm'},
                {skillName: 'medicine' , value: 0, trait: 'intelligence'},
                {skillName: 'melee_attack' , value: 0, trait: 'strength'},
                {skillName: 'nature' , value: 0, trait: 'intelligence'},
                {skillName: 'perception' , value: 0, trait: 'intelligence'},
                {skillName: 'ranged_attack' , value: 0, trait: 'dexterity'},
                {skillName: 'read_intent' , value: 0, trait: 'charm'},
                {skillName: 'reflexes' , value: 0, trait: 'dexterity'},
                {skillName: 'resist_manipulation' , value: 0, trait: 'will'},
                {skillName: 'resist_poison' , value: 0, trait: 'strength'},
                {skillName: 'social_knowledge' , value: 0, trait: 'charm'},
                {skillName: 'stealth' , value: 0, trait: 'dexterity'},
                {skillName: 'toughness' , value: 0, trait: 'strength'}
            ],
            skillsOpen: false,
            defense: 0,
            damageReduce: 0,
            customCards: [],
            priestDomain: 'battle'
        }
    }
    
    render(){
        const {
            isOpen,
            close,
            createCharacter,
            saveAttributes
        } = this.props
        const {
            name,
            level,
            ancestry,
            classOne,
            classTwo,
            classThree,
            traits,
            skills,
            skillsOpen,
            defense,
            damageReduce,
            customCards,
            priestDomain
        } = this.state
        
        const clearState = () => {
            this.setState({
                name: "",
                level: 1,
                ancestry: "",
                classOne: "",
                classTwo: "",
                classThree: "",
                traits: {
                    strength: 0,
                    dexterity: 0,
                    intelligence: 0,
                    will: 0,
                    charm: 0
                },
                skills: [
                    {skillName: 'animal_handling', value: 0, trait: 'will'},
                    {skillName: 'appraise' , value: 0, trait: 'intelligence'},
                    {skillName: 'athletics' , value: 0, trait: 'strength'},
                    {skillName: 'finesse' , value: 0, trait: 'dexterity'},
                    {skillName: 'history' , value: 0, trait: 'intelligence'},
                    {skillName: 'magic_knowledge' , value: 0, trait: 'intelligence'},
                    {skillName: 'magic_school_arcane' , value: 0, trait: 'intelligence'},
                    {skillName: 'magic_school_creation' , value: 0, trait: 'charm'},
                    {skillName: 'magic_school_divine' , value: 0, trait: 'will'},
                    {skillName: 'magic_school_elemental' , value: 0, trait: 'will'},
                    {skillName: 'manipulation' , value: 0, trait: 'charm'},
                    {skillName: 'medicine' , value: 0, trait: 'intelligence'},
                    {skillName: 'melee_attack' , value: 0, trait: 'strength'},
                    {skillName: 'nature' , value: 0, trait: 'intelligence'},
                    {skillName: 'perception' , value: 0, trait: 'intelligence'},
                    {skillName: 'ranged_attack' , value: 0, trait: 'dexterity'},
                    {skillName: 'read_intent' , value: 0, trait: 'charm'},
                    {skillName: 'reflexes' , value: 0, trait: 'dexterity'},
                    {skillName: 'resist_manipulation' , value: 0, trait: 'will'},
                    {skillName: 'resist_poison' , value: 0, trait: 'strength'},
                    {skillName: 'social_knowledge' , value: 0, trait: 'charm'},
                    {skillName: 'stealth' , value: 0, trait: 'dexterity'},
                    {skillName: 'toughness' , value: 0, trait: 'strength'}
                ],
                skillsOpen: false,
                defense: 0,
                damageReduce: 0,
                customCards: [],
                priestDomain: 'battle'
            })
        }
        
        const saveCharacter = () => {
            createCharacter(name, level, ancestry, classOne, classTwo, classThree, traits, skills, false, defense, damageReduce, customCards, priestDomain);
            saveAttributes();
            clearState();
            close();
        };
        
        return(
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-title'>
                    <h2>Create a New Character</h2>
                    <div className='close-button' onClick={() => close()}>
                        <span>X</span>
                    </div>
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
                        <span>Character Ancestry: </span>
                        <div className='modal-input'>
                            <select 
                                value={ancestry}
                                onChange={e => this.setState({ancestry: event.target.value})}
                            >
                                <option selected>-- Select an Ancestry --</option>
                                <option value='dwarf'>Dwarf</option>
                                <option value='elf'>Elf</option>
                                <option value='faeling'>Faeling</option>
                                <option value='goblin'>Goblin</option>
                                <option value='human'>Human</option>
                            </select>
                        </div>
                    </div>
                    <div className='modal-option'>
                        <span>Level One Class: </span>
                        <div className='modal-input'>
                            <select 
                                value={classOne}
                                onChange={e => this.setState({classOne: event.target.value})}
                            >
                                <option selected>-- Select a Class --</option>
                                <option value='fighter'>Fighter</option>
                                <option value='mage'>Mage</option>
                                <option value='nomad'>Nomad</option>
                                <option value='priest'>Priest</option>
                                <option value='rogue'>Rogue</option>
                                <option value='socialite'>Socialite</option>
                            </select>
                        </div>
                    </div>
                    {
                        classOne === 'priest' &&
                        <div className='modal-option'>
                            <span>Diety's Domain: </span>
                            <div className='modal-input'>
                                <select 
                                    value={priestDomain}
                                    onChange={e => this.setState({priestDomain: event.target.value})}
                                >
                                    <option selected>-- Select an Ancestry --</option>
                                    <option value='battle'>Battle</option>
                                    <option value='righteousness'>Righteousness</option>
                                    <option value='luck'>Luck</option>
                                    <option value='nature'>Nature</option>
                                    <option value='death'>Death</option>
                                </select>
                            </div>
                        </div>
                    }
                    <div className={`modal-option ${level >= 3 ? '' : 'hide'}`}>
                        <span>Level Three Class: </span>
                        <div className='modal-input'>
                            <select 
                                value={classTwo}
                                onChange={e => this.setState({classTwo: event.target.value})}
                            >
                                <option selected>-- Select a Class --</option>
                                <option value='alchemist'>Alchemist</option>
                                <option value='armsman'>Armsman</option>
                                <option value='barbarian'>Barbarian</option>
                                <option value='bard'>Bard</option>
                                <option value='beast_tamer'>Beast Tamer</option>
                                <option value='druid'>Druid</option>
                                <option value='elementalist'>Elementalist</option>
                                <option value='faithful'>Faithful</option>
                                <option value='gunslinger'>Gunslinger</option>
                                <option value='knight'>Knight</option>
                                <option value='paladin'>Paladin</option>
                                <option value='rifleman'>Rifleman</option>
                                <option value='swashbuckler'>Swashbuckler</option>
                                <option value='thief'>Thief</option>
                                <option value='tunnel_gunner'>Tunnel Gunner</option>
                                <option value='warlock'>Warlock</option>
                                <option value='wizard'>Wizard</option>
                            </select>
                        </div>
                    </div>
                    <div className='modal-option'>
                        <span>Defense: </span>
                        <div className='modal-input'>
                            <input
                                value={defense}
                                onChange={(e) => {this.setState({defense: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className='modal-option'>
                        <span>Damage Resistance: </span>
                        <div className='modal-input'>
                            <input
                                value={damageReduce}
                                onChange={(e) => {this.setState({damageReduce: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className='traits'>
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
                    </div>
                    <div className='modal-option-multi-select'>
                        <div className='dropdown-button' onClick={() => this.setState({skillsOpen: !skillsOpen}) }>
                            <h3>Skill Points</h3>
                            <span className={`arrow ${skillsOpen ? 'flip' : ''}`}>&#8249;</span>
                        </div>
                        <div className={`dropdown-list ${skillsOpen ? '' : 'hide'}`}>
                            {
                                skills.map((skill, index) =>
                                    <div className='skill'>
                                        <input
                                            value={skill.value}
                                            onChange={e => this.setState({
                                                skills: [
                                                    ...skills.slice(0, index),
                                                    {skillName: skill.skillName, value: parseInt(event.target.value || 0), trait: skill.trait},
                                                    ...skills.slice(index + 1)
                                                ]           
                                            })}
                                        />
                                        <span>{skill.skillName.replace(/_/g, " ")}</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='horizontal-buttons'>
                        <div className='button' onClick={() => saveCharacter()}>
                            Save
                        </div>
                        <div className='button' onClick={() => close()}>
                            Cancel
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
})(NewCharacterModal);