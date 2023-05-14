import {Component} from 'react';
import { connect } from 'react-redux';
import {transferToHand, transferToDiscard, transferToBurnPile, transferToDeck} from '../store/actions'
import '../style/Card.scss'

class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        const {
            cardInfo,
            cardView,
            transferToHand,
            transferToDiscard,
            transferToBurnPile,
            transferToDeck
        } = this.props
        
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
                <div className='card-actions'>
                    <div 
                        className='action'
                        onClick={() => cardView == 'hand' ? transferToDeck(cardInfo) : transferToHand(cardInfo)}
                    >
                        {cardView == 'hand' ? 'Deck' : 'Hand'}
                    </div>
                    <div 
                        className='action'
                        onClick={() => cardView == 'discard' ? transferToDeck(cardInfo) : transferToDiscard(cardInfo)}
                    >
                        {cardView == 'discard' ? 'Deck' : 'Discard'}
                    </div>
                    <div
                        className='action'
                        onClick={() => cardView == 'burn' ? transferToDeck(cardInfo) : transferToBurnPile(cardInfo)}
                    >
                        {cardView == 'burn' ? 'Deck' : 'Burn'}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{
    transferToHand: transferToHand,
    transferToDiscard: transferToDiscard,
    transferToBurnPile: transferToBurnPile,
    transferToDeck: transferToDeck
})(Card);