import { useDispatch } from 'react-redux';
import {
    transferDeck,
    transferHand,
    transferDiscard,
    transferBurn
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
            <div className='card-action'>
                <span>{cardInfo.action}</span>
            </div>
            <div className='card-action'>
                <span>{`${cardInfo.from} ${cardInfo.level ? cardInfo.level : ''}`}</span>
            </div>
            <div className='card-description'>
                <span>{cardInfo.description}</span>
            </div>
            <div className='card-title'>
                <span>{cardInfo.cardName}</span>
            </div>
            <div className='card-action'>
                <span>{cardInfo.action}</span>
            </div>
            <div className='card-action'>
                <span>{`${cardInfo.from} ${cardInfo.level ? cardInfo.level : ''}`}</span>
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
                <div
                    className='action'
                    onClick={() => cardView == 'burn' ? useAction(transferDeck(cardInfo)) : useAction(transferBurn(cardInfo))}
                >
                    {cardView == 'burn' ? 'Deck' : 'Burn'}
                </div>
            </div>
        </div>
    )
}