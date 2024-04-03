import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { resetDeck } from '../store/characterReducer';
import { Card } from './Card';
import '../style/InTheCards.scss'

export const CardHandler = () => {

    const useAction = useDispatch();

    const views = useSelector(state => ({
        deck: state.character.deck,
        hand: state.character.hand,
        discard: state.character.discard,
        burn: state.character.burn
    }));

    const [selectedCardView, setSelectedCardView] = useState('deck');

    return (
        <main>
            <div className='card-options-menu'>
                <div 
                    className={`card-option ${selectedCardView === 'deck' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('deck')}
                >
                    <span>{`Deck (${views.deck.length})`}</span>
                </div>
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
                    <span>{`Discard (${views.discard.length})`}</span>
                </div>
                <div 
                    className={`card-option ${selectedCardView === 'burn' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('burn')}
                >
                    <span>{`Burn (${views.burn.length})`}</span>
                </div>
            </div>
            <div className='card-display'>
                {
                    views[selectedCardView].map(card =>
                        <Card cardInfo={card} cardView={selectedCardView}/>
                    )
                }
            </div>
            <div className = "card-functions">
                <div
                    className='reset-deck'
                    onClick={() => useAction(resetDeck())}
                >
                    Reset Deck
                </div>
            </div>
        </main>
    )
}