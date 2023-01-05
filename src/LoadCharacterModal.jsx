import {Component} from 'react';
import './style/ModalStructure.scss'

class LoadCharacterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    
    render(){
        const {
            isOpen,
            close,
        } = this.props
        const {
            cards
        } = this.state
        
        return(
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-body'>
                    <div className='modal-title'>
                        <h2>Load a Character</h2>
                        <div className="close-button" onClick={() => close()}>
                            <span>X</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadCharacterModal;