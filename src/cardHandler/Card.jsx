import { useDispatch, useSelector } from 'react-redux';
import {
    saveCharacter,
    transferToHand,
    transferToDiscard,
    transferToDiscardRest,
    deleteCustomCard
} from '../store/characterReducer'
import cardInfo from '../assets/characterInfoAndCards.json';
import './Card.scss'

export const Card = (props) => {

    const useAction = useDispatch();
    const {
        cardId,
        cardView
    } = props;

    const customCards = useSelector(state => state.character.customCards);
    const card = cardId.toString().startsWith('custom-')
        ? customCards.find(card => card.id === cardId)
        : cardInfo.cards.find(card => card.id === cardId);

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
                    onClick={() => cardView == 'hand' ?
                        (
                            useAction(transferToDiscard(cardId)),
                            useAction(saveCharacter())
                        )
                        :
                        (
                            useAction(transferToHand(cardId)),
                            useAction(saveCharacter())
                        )
                    }
                >
                    {cardView == 'hand' ? 'Discard' : 'Hand'}
                </div>
                { cardView === 'hand' &&
                    <div 
                        className='action'
                        onClick={() => (
                            useAction(transferToDiscardRest(cardId)),
                            useAction(saveCharacter())
                        )}
                    >
                        Discard (Rest)
                    </div>
                }
                {cardId.toString().startsWith('custom-') && (
                    <div 
                        className='action delete'
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this custom card?')) {
                                useAction(deleteCustomCard(cardId));
                                useAction(saveCharacter());
                            }
                        }}
                    >
                        Delete Card
                    </div>
                )}
            </div>
        </div>
    )
}