import {Component} from 'react';
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
        } = this.props
        const {
            name,
            level,
            ancestry,
            classOne,
            classThree,
            fiveSkills,
            fiveSkillsOpen,
            tenSkills,
            tenSkillsOpen
        } = this.state
        
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
                            <input/>
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
                            <select>
                                <option value='dwarf' selected>Dwarf</option>
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
                            <select>
                                <option value='fighter' selected>Fighter</option>
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
                            <select>
                                <option value='alchemist' selected>Alchemist</option>
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
                            <span className='arrow'>&#8249;</span>
                        </div>
                        <div className={`skills-list ${fiveSkillsOpen ? '' : 'hide'}`}>
                            <div className='skill'>Animal Handling</div>
                        </div>
                    </div>
                    <div className='modal-option-multi-select'>
                        <div className='skill-dropdown-button'>
                            <h3>10 Point Skills</h3>
                            <span className='arrow'>&#8249;</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCharacterModal;