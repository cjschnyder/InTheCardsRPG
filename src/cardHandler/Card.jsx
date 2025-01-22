import { useDispatch } from 'react-redux';
import {
    transferToHand,
    transferToDiscard,
    transferToDiscardRest
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
                    onClick={() => cardView == 'hand' ? useAction(transferToDiscard(cardInfo)) : useAction(transferToHand(cardInfo))}
                >
                    {cardView == 'hand' ? 'Discard' : 'Hand'}
                </div>
                { cardView === 'hand' &&
                    <div 
                        className='action'
                        onClick={() => useAction(transferToDiscardRest(cardInfo))}
                    >
                        Discard (Rest)
                    </div>
                }
            </div>
        </div>
    )
}