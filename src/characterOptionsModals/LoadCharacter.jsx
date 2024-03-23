import { connect } from 'react-redux';
import {loadCharacter} from '../store/actions'
import '../style/ModalStructure.scss'
import './LoadCharacter.scss'

export function LoadCharacter(props) {
    const {
        loadCharacter
    } = props
    
    return(
        <div className={`modal-wrapper`}>
            <div className='modal-body'>
                <div className='modal-title'>
                    <h2>Load a Character</h2>
                </div>
                <div className='load-deck-wrapper'>
                        {
                            Object.keys(JSON.parse(JSON.stringify(localStorage))).filter(characters => !characters.includes('persist')).map(character =>
                                <div className='load-deck'>
                                    <h3>{character}:</h3>
                                    <div 
                                        className='button' 
                                        onClick={() => {
                                            const selectedCharacter = JSON.parse(localStorage.getItem(character))
                                            loadCharacter(
                                                selectedCharacter
                                            );
                                            setTimeout(()=>{location.replace("/character-sheet")}, 500) //Bad, replace timeout in future
                                        }}
                                    >
                                        Load
                                    </div>
                                    <div 
                                        className='button delete' 
                                        onClick={() => {
                                            localStorage.removeItem(character);
                                            location.reload();
                                        }}
                                    >
                                        Delete
                                    </div>
                                </div>
                            )
                        }
                    </div>
            </div>
        </div>
    )
}

export default connect(null, {
    loadCharacter: loadCharacter
})(LoadCharacter);