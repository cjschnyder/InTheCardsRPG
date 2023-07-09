import { Component } from 'react';
import { connect } from 'react-redux';
import CharacterModal from './characterOptionsModals/CharacterModal';
import LoadCharacterModal from './characterOptionsModals/LoadCharacterModal';
import CardHandler from './cardHandler/CardHandler';
import CharacterSheet from './characterSheet/CharacterSheet';
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
                </div>
                {cardHandler && <CardHandler />}
                {characterSheet && <CharacterSheet />}
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
                        name = "Bean"
                    />
                </div>
            </div>
        )
    }
}

export default DernCharacterCreator;
