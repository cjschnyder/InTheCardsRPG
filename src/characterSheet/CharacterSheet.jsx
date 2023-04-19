import { Component, UseEffect } from 'react';
import { connect } from 'react-redux';
import {setCurrentHealth} from '../store/actions'
import '../style/CharacterSheet.scss'

class CharacterSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsOne: this.props.skills.slice().splice(0, 12),
            skillsTwo: this.props.skills.slice().splice(12),
            currentHealth: this.props.currentHealth,
            healthNumber: 0
        }
    }
    
    componentDidMount() {
        this.setState({skillsTwo: [
            {skillName: 'melee attack (small)', value: this.state.skillsOne[this.state.skillsOne.length-1].value, trait: 'dexterity'},
            ...this.state.skillsTwo
        ]})
    }
    
    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                skillsOne: this.props.skills.slice().splice(0, 12),
                skillsTwo: this.props.skills.slice().splice(12),
                currentHealth: this.props.currentHealth
            });
        }
        if(this.state.skillsTwo[0].skillName !== 'melee attack (small)'){
                this.setState({skillsTwo: [
                    {skillName: 'melee attack (small)', value: this.state.skillsOne[this.state.skillsOne.length-1].value, trait: 'dexterity'},
                    ...this.state.skillsTwo
                ]})
        }
    }
    
    render(){
        const {
            name,
            level,
            ancestry,
            classOne,
            classTwo,
            classThree,
            traits,
            health,
            healingRate,
            movement,
            defense,
            damageReduce,
            setCurrentHealth
        } = this.props
        const {
            skillsOne,
            skillsTwo,
            currentHealth,
            healthNumber
        } = this.state
        
        return (
            <main>
                <div className='character-sheet'>
                    <div className='top-sheet'>
                        <div className='character-info'>
                            <div className='character name'>
                                <span>Name:</span>
                                <span>{name}</span>
                            </div>
                            <div className='character level'>
                                <span>Level:</span>
                                <span>{level}</span>
                            </div>
                            <div className='character ancestry'>
                                <span>Ancestry:</span>
                                <span>{ancestry}</span>
                            </div>
                            <div className='character class'>
                                <span>Classes:</span>
                                <span>{classOne} {classTwo && `, ${classTwo}`} {classThree && `, ${classThree}`}</span>
                            </div>
                        </div>
                        <div className='traits'>
                            {
                                 Object.keys(traits).map(trait => 
                                    <div className='trait'>
                                        <span className='trait-name'>{trait}</span>
                                        <span className='trait-value'>{traits[trait]}</span>
                                    </div>
                                )
                             }
                        </div>
                    </div>
                    <div className='bottom-sheet'>
                        <div className='skills'>
                            <div className='skills-one'>
                                {
                                    skillsOne.map(skill =>
                                        <div className='skill'>
                                            <span className='skill-name'>{skill.skillName.replace(/_/g, " ")}: </span>
                                            <span className='skill-value'>{skill.value + traits[skill.trait]}</span>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='skills-two'>
                                {
                                    skillsTwo.map(skill =>
                                        <div className='skill'>
                                            <span className='skill-name'>{skill.skillName.replace(/_/g, " ")}: </span>
                                            <span className='skill-value'>{skill.value + traits[skill.trait]}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='combat-info'>
                            <div className='health-tracker'>
                                <div className='change-health'>
                                    <div 
                                        className='add-health'
                                        onClick={() => {
                                            setCurrentHealth(currentHealth, 'add', healthNumber)
                                            this.setState({healthNumber: 0})
                                        }}
                                    >
                                        +
                                    </div>
                                    <input 
                                        value={healthNumber}
                                        onChange={(e) => {this.setState({healthNumber: event.target.value})}}
                                    />
                                    <div 
                                        className='subtract-health'
                                        onClick={() => {
                                            setCurrentHealth(currentHealth, 'subtract', healthNumber)
                                            this.setState({healthNumber: 0})
                                        }}
                                    >
                                        - 
                                    </div>
                                </div>
                                <div className='display-current-health'>
                                    <span className='title'>Current Health</span>
                                    <span className='value'>{currentHealth}</span>
                                </div>
                            </div>
                            <div className='combat-stats'>
                                <div className='combat-blurb'>
                                    <span className='title'>Health</span>
                                    <span className='value'>{health}</span>
                                    <div className='sub-info'>
                                        <span className='sub-title'>Heal Rate:</span>
                                        <span className='sub-value'>{healingRate}</span>
                                    </div>
                                </div>
                                <div className='combat-blurb'>
                                    <span className='title'>Defense</span>
                                    <span className='value'>{defense}</span>
                                    <div className='sub-info'>
                                        <span className='sub-title'>D/R:</span>
                                        <span className='sub-value'>{damageReduce}</span>
                                    </div>
                                </div>
                                <div className='combat-blurb'>
                                    <span className='title'>Movement</span>
                                    <span className='value'>{movement}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        health: state.health,
        healingRate: state.healingRate,
        currentHealth: state.currentHealth,
        movement: state.movement,
        defense: state.defense,
        damageReduce: state.damageReduce
        
    };
};

export default connect(mapStateToProps, {
    setCurrentHealth: setCurrentHealth
})(CharacterSheet);
