import { Component } from 'react';
import NewCharacterModal from './NewCharacterModal';
import LoadCharacterModal from './LoadCharacterModal';
import './style/DernCharacterCreator.scss'

class DernCharacterCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewCharacter: false,
            showLoadCharacter: false
        }
    }
    
    render(){
        const {
            showNewCharacter,
            showLoadCharacter
        } = this.state
        
        const toggleNewCharacterModal = () => {
            showLoadCharacter && this.setState({showLoadCharacter: false});
            this.setState({showNewCharacter: !showNewCharacter});
        }
        
        const toggleLoadCharacterModal = () => {
            showNewCharacter && this.setState({showNewCharacter: false});
            this.setState({showLoadCharacter: !showLoadCharacter});
        }
        
        return (
            <div id="dernCharacterCreator">
               <header>
                    <h1 className="title">Let Me Handle Your Deck</h1>
                    <div className="character-menu">
                        <div className="option" onClick={() => toggleNewCharacterModal()}>
                            <span>Create New Character</span>
                        </div>
                        <div className="option" onClick={() => toggleLoadCharacterModal()}>
                            <span>Load Character</span>
                        </div>
                    </div>
                </header>
                <div>
                    <NewCharacterModal
                        isOpen={showNewCharacter}
                        close={() => toggleNewCharacterModal()}
                    />
                    <LoadCharacterModal 
                        isOpen={showLoadCharacter}
                        close={() => toggleLoadCharacterModal()}
                    />
                </div>
            </div>
        )
    }
}

export default DernCharacterCreator;
