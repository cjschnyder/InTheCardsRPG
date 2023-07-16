import { Component } from 'react';
import { connect } from 'react-redux';
import CharacterModal from './characterOptionsModals/CharacterModal';
import LoadCharacterModal from './characterOptionsModals/LoadCharacterModal';
import CardHandler from './cardHandler/CardHandler';
import CharacterSheet from './characterSheet/CharacterSheet';
import Inventory from './inventory/Inventory';
import './style/DernCharacterCreator.scss'

class DernCharacterCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewCharacter: false,
            showLoadCharacter: false,
            showEditCharacter: false,
            characterSheet: true,
            cardHandler:false,
            inventory: false,
        }
    }
    
    render(){
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
            skillPoints
        } = this.props
        const {
            showNewCharacter,
            showLoadCharacter,
            showEditCharacter,
            characterSheet,
            cardHandler,
            inventory,
        } = this.state
        
        const toggleNewCharacterModal = () => {
            this.setState({
                showNewCharacter: !showNewCharacter,
                showLoadCharacter: false,
                showEditCharacter: false
            });
        }
        
        const toggleLoadCharacterModal = () => {
            this.setState({
                showLoadCharacter: !showLoadCharacter,
                showNewCharacter: false,
                showEditCharacter: false
            });
        }
        
        const toggleEditCharacterModal = () => {
             this.setState({
                showEditCharacter: !showEditCharacter,
                showNewCharacter: false,
                showLoadCharacter: false
            });
        }
        
        const selectCharacterSheet = () => {
            !characterSheet && this.setState({
                characterSheet: true,
                cardHandler: false,
                inventory: false,
            })
        }
        
        const selectCardHandler = () => {
            !cardHandler && this.setState({
                characterSheet: false,
                cardHandler: true,
                inventory: false,
            })
        }
        
        const selectInventory = () => {
            !inventory && this.setState({
                characterSheet: false,
                cardHandler: false,
                inventory: true,
            })
        }
        
        return (
            <div id="dern-character-creator">
               <header>
                    <h1 className="title">Let Me Handle Your Deck</h1>
                    <div className="character-menu">
                        <div className="option" onClick={() => toggleNewCharacterModal()}>
                            <span>Create New Character</span>
                        </div>
                        <div className="option" onClick={() => toggleEditCharacterModal()}>
                            <span>Edit Character</span>
                        </div>
                        <div className="option" onClick={() => toggleLoadCharacterModal()}>
                            <span>Load Character</span>
                        </div>
                    </div>
                </header>
                <div id='view-options-menu'>
                    <div 
                        className={`view-options-button ${characterSheet && 'selected'}`}
                        onClick={() => selectCharacterSheet()}
                    >
                        <span>Character Sheet</span>
                    </div>
                    <div 
                        className={`view-options-button ${cardHandler && 'selected'}`}
                        onClick={() => selectCardHandler()}
                    >
                        <span>Card Handler</span>
                    </div>
                    <div 
                        className={`view-options-button ${inventory && 'selected'}`}
                        onClick={() => selectInventory()}
                    >
                        <span>Inventory</span>
                    </div>
                </div>
                {cardHandler && <CardHandler />}
                {characterSheet && <CharacterSheet />}
                {inventory && <Inventory />}
                <div>
                    <CharacterModal
                        isOpen={showNewCharacter}
                        close={() => toggleNewCharacterModal()}
                    />
                    <LoadCharacterModal 
                        isOpen={showLoadCharacter}
                        close={() => toggleLoadCharacterModal()}
                    />
                    <CharacterModal 
                        isOpen={showEditCharacter}
                        close={() => toggleEditCharacterModal()}
                        name={name}
                        level={level}
                        ancestry={ancestry}
                        background={background}
                        starterClass={starterClass}
                        specialtyClassOne={specialtyClassOne}
                        specialtyClassTwo={specialtyClassTwo}
                        traits={traits}
                        skills={skills}
                        skillPoints={skillPoints}
                    />
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
        background: state.background,
        starterClass: state.classOne,
        specialtyClassOne: state.classTwo,
        specialtyClassTwo: state.classThree,
        traits: state.traits,
        skills: state.skills,
        skillPoints: state.skillPoints
        
    };
};

export default connect(mapStateToProps, {})(DernCharacterCreator);
