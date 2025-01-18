import { useDispatch } from 'react-redux';
import { loadCharacter } from '../store/characterReducer'
import '../style/ModalStructure.scss'
import './LoadCharacter.scss'

export const LoadCharacter = () => {

    const useAction = useDispatch();
    
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
                                            useAction(loadCharacter(selectedCharacter));
                                            location.replace("/character-sheet");
                                        }}
                                    >
                                        Load
                                    </div>
                                    <div 
                                        className='button' 
                                        onClick={() => {
                                            location.replace(`/create?${character}`)
                                        }}
                                    >
                                        Edit
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