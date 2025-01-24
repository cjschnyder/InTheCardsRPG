import { useDispatch } from 'react-redux';
import {
    transferToHand,
    transferToDiscard,
    transferToDiscardRest
} from '../store/characterReducer'
import cardInfo from '../assets/characterInfoAndCards.json';
import './Card.scss'

export const Card = (props) => {

    const useAction = useDispatch();
    const {
        cardId,
        cardView
    } = props

    const card = cardInfo.cards.find((card) => card.id === cardId);

    return(
        <div className='card-wrapper'>
            {
                card.abilities.map(ability => (
                    <div className='ability-wrapper' key={ability.name}>
                        <div className='card-title'>
                            <span>{ability.name}</span>
                        </div>
                        <div className='card-type'>
                            <span>{ability.type}</span>
                        </div>
                        <div className='card-description'>
                            <span>{ability.description}</span>
                        </div>
                    </div>
                ))
            }
            <div className='card-actions'>
                <div 
                    className='action'
                    onClick={() => cardView == 'hand' ? useAction(transferToDiscard(cardId)) : useAction(transferToHand(cardId))}
                >
                    {cardView == 'hand' ? 'Discard' : 'Hand'}
                </div>
                { cardView === 'hand' &&
                    <div 
                        className='action'
                        onClick={() => useAction(transferToDiscardRest(cardId))}
                    >
                        Discard (Rest)
                    </div>
                }
            </div>
        </div>
    )
}