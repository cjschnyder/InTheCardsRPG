import { useDispatch } from 'react-redux';
import {
    transferHand,
    transferDiscard
} from '../store/characterReducer'
import './Card.scss'

export const Card = (props) => {

    const useAction = useDispatch();
    const {
        cardInfo,
        cardView
    } = props

    return(
        <div className='card-wrapper'>
            <div className='card-title'>
                <span>{cardInfo.cardName}</span>
            </div>
            <div className='card-type'>
                <span>{cardInfo.action}</span>
            </div>
            <div className='card-description'>
                <span>{cardInfo.description}</span>
            </div>
            <div className='card-actions'>
                <div 
                    className='action'
                    onClick={() => cardView == 'hand' ? useAction(transferDeck(cardInfo)) : useAction(transferHand(cardInfo))}
                >
                    {cardView == 'hand' ? 'Deck' : 'Hand'}
                </div>
                <div 
                    className='action'
                    onClick={() => cardView == 'discard' ? useAction(transferDeck(cardInfo)) : useAction(transferDiscard(cardInfo))}
                >
                    {cardView == 'discard' ? 'Deck' : 'Discard'}
                </div>
            </div>
        </div>
    )
}