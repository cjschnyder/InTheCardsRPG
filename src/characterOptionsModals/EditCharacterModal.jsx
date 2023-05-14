import {Component} from 'react';
import { connect } from 'react-redux';
import {createCharacter, saveAttributes} from '../store/actions'
import '../style/ModalStructure.scss'
import '../style/CharacterModal.scss'

class EditCharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            level: this.props.level,
            ancestry: this.props.ancestry,
            classOne: this.props.classOne,
            classTwo: this.props.classTwo,
            classThree: this.props.classThree,
            traits: this.props.traits,
            skills: this.props.skills,
            skillsOpen: false,
            defense: this.props.defense,
            damageReduce: this.props.damageReduce,
            priestDomain: this.props.priestDomain,
            customCardSectionOpen: false,
            cardName: '',
            cardActionType: '',
            cardDescription: '',
            cardOrigin: '',
            customCards: []
        }
    }
    
    componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
            name: this.props.name,
            level: this.props.level,
            ancestry: this.props.ancestry,
            classOne: this.props.classOne,
            classTwo: this.props.classTwo,
            classThree: this.props.classThree,
            traits: this.props.traits,
            skills: this.props.skills,
            defense: this.props.defense,
            damageReduce: this.props.damageReduce,
            priestDomain: this.props.priestDomain
        });
    }
}
    
    render(){
        const {
            isOpen,
            close,
            createCharacter,
            saveAttributes,
            currentHealth
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
            priestDomain,
            customCardSectionOpen,
            cardName,
            cardActionType,
            cardDescription,
            cardOrigin,
            customCards
        } = this.state
        
        const saveCharacter = () => {
            createCharacter(name, level, ancestry, classOne, classTwo, classThree, traits, skills, currentHealth, defense, damageReduce, customCards, priestDomain);
            saveAttributes();
            close();
        };
        
        const addCustomCard = () => {
            this.setState({
                customCards: [
                    ...customCards,
                    {
                        "cardName": cardName,
                        "action": cardActionType,
                        "description": cardDescription,
                        "from": cardOrigin
                    }
                ],
                cardName: '',
                cardActionType: '',
                cardDescription: '',
                cardOrigin: ''
            });
        }
        
        return(
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-title'>
                    <h2>Edit Character</h2>
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
                     <div className='modal-option-multi-select'>
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
                                    <input
                                        value={cardActionType}
                                        onChange={(e) => {this.setState({cardActionType: e.target.value})}}
                                    />
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
                    </div>
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
                        <div className='button' onClick={() => close()}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        level: state.level,
        ancestry: state.ancestry,
        classOne: state.classOne, 
        classTwo: state.classTwo, 
        classThree: state.classThree, 
        traits: state.traits, 
        skills: state.skills,
        currentHealth: state.currentHealth,
        defense: state.defense,
        damageReduce: state.damageReduce,
        priestDomain: state.priestDomain
        
    };
};

export default connect(mapStateToProps,{
    createCharacter: createCharacter,
    saveAttributes: saveAttributes
})(EditCharacterModal);