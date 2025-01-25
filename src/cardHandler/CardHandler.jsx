import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { newScene, rest, saveCharacter } from '../store/characterReducer';
import { Card } from './Card';
import '../style/InTheCards.scss'

export const CardHandler = () => {

    const useAction = useDispatch();

    const views = useSelector(state => ({
        hand: state.character.hand,
        discard: state.character.discard
    }));
    const discardRest = useSelector(state => state.character.discardRest);
    const totalDiscard = [...views.discard, ...discardRest];

    const [selectedCardView, setSelectedCardView] = useState('hand');

    return (
        <main>
            <div className='card-options-menu'>
                <div 
                    className={`card-option ${selectedCardView === 'hand' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('hand')}
                >
                    <span>{`Hand (${views.hand.length})`}</span>
                </div>
                <div 
                    className={`card-option ${selectedCardView === 'discard' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('discard')}
                >
                    <span>{`Discard (${views.discard.length + discardRest.length})`}</span>
                </div>
            </div>
            <div className='card-display'>
                {
                    selectedCardView === 'hand' ?
                        views.hand.map(card =>
                            <Card cardId={card} cardView={selectedCardView}/>
                        )
                    :
                        totalDiscard.map(card =>
                            <Card cardId={card} cardView={selectedCardView}/>
                        )
                }
            </div>
            <div className="card-functions">
                <div className = "card-function">
                    <div
                        className='new-scene'
                        onClick={() => (
                            useAction(newScene()),
                            useAction(saveCharacter())
                        )}
                    >
                        New Scene
                    </div>
                </div>
                <div className = "card-function">
                    <div
                        className='reset-hand'
                        onClick={() => (
                            useAction(rest()),
                            useAction(saveCharacter())
                        )}
                    >
                        Rest
                    </div>
                </div>
            </div>
        </main>
    )
}