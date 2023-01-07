import {Component} from 'react';
import { connect } from 'react-redux';
import {createDeck, setName} from './store/actions'
import './style/ModalStructure.scss'
import './style/NewCharacterModal.scss'

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
            fiveSkills: [],
            fiveSkillsOpen: false,
            tenSkills: [],
            tenSkillsOpen: false
        }
    }
    
    render(){
        const {
            isOpen,
            close,
            createDeck,
        } = this.props
        const {
            name,
            level,
            ancestry,
            classOne,
            classTwo,
            classThree,
            fiveSkills,
            fiveSkillsOpen,
            tenSkills,
            tenSkillsOpen
        } = this.state
        
        const characterSkills = [
            'Animal Handling',
            'Appraise',
            'Athletics',
            'History',
            'Magic Knowledge',
            'Magic School: Arcane',
            'Magic School: Creation',
            'Magic School: Divine',
            'Magic School: Elemental',
            'Manipulation',
            'Medicine',
            'Melee Attack',
            'Nature',
            'Perception',
            'Ranged Attack',
            'Read Intent',
            'Reflexes',
            'Resist Manipulation',
            'Resist Poison',
            'Slight of Hand',
            'Social Knowledge',
            'Stealth',
            'Toughness'
            
        ];
        
        const toggleFivePtSkills = (skill) => {
            if(fiveSkills.includes(skill))
                {
                    const skills = fiveSkills.filter(elem => elem != skill);
                    this.setState({fiveSkills: skills});
                }
            else
                {
                    const skills = fiveSkills;
                    skills.push(skill);
                    this.setState({fiveSkills: skills});
                }
        }
        
        const toggleTenPtSkills = (skill) => {
            if(tenSkills.includes(skill))
                {
                    const skills = tenSkills.filter(elem => elem != skill);
                    this.setState({tenSkills: skills});
                }
            else
                {
                    const skills = tenSkills;
                    skills.push(skill);
                    this.setState({tenSkills: skills});
                }
        }
        
        const saveCharacter = () => {
            
        }
        
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
                                <option value='beast-tamer'>Beast Tamer</option>
                                <option value='druid'>Druid</option>
                                <option value='elementalist'>Elementalist</option>
                                <option value='faithful'>Faithful</option>
                                <option value='gunslinger'>Gunslinger</option>
                                <option value='knight'>Knight</option>
                                <option value='paladin'>Paladin</option>
                                <option value='swashbuckler'>Swashbuckler</option>
                                <option value='warlock'>Warlock</option>
                                <option value='wizard'>Wizard</option>
                            </select>
                        </div>
                    </div>
                    <div className='modal-option-multi-select'>
                        <div className='skill-dropdown-button' onClick={() => this.setState({fiveSkillsOpen: !fiveSkillsOpen}) }>
                            <h3>5 Point Skills</h3>
                            <span className={`arrow ${fiveSkillsOpen ? 'flip' : ''}`}>&#8249;</span>
                        </div>
                        <div className={`skills-list ${fiveSkillsOpen ? '' : 'hide'}`}>
                            {
                                characterSkills.map((skill) =>
                                    <div 
                                        className={`skill ${fiveSkills.includes(skill) ? 'selected' : ''}`} 
                                        onClick={() => toggleFivePtSkills(skill)}
                                    >
                                        {skill}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='modal-option-multi-select'>
                        <div className='skill-dropdown-button' onClick={() => this.setState({tenSkillsOpen: !tenSkillsOpen}) }>
                            <h3>10 Point Skills</h3>
                            <span className={`arrow ${tenSkillsOpen ? 'flip' : ''}`}>&#8249;</span>
                        </div>
                        <div className={`skills-list ${tenSkillsOpen ? '' : 'hide'}`}>
                            {
                                characterSkills.map((skill) =>
                                    <div 
                                        className={`skill ${tenSkills.includes(skill) ? 'selected' : ''}`} 
                                        onClick={() => toggleTenPtSkills(skill)}
                                    >
                                        {skill}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='horizontal-buttons'>
                        <div className='button' onClick={() => createDeck(level, ancestry, classOne, classOne, classThree, fiveSkills, tenSkills)}>
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
    createDeck: createDeck,
    setName: setName
})(NewCharacterModal);