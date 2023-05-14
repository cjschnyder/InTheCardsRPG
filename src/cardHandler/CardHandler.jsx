import { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import {resetDeck} from '../store/actions'
import '../style/DernCharacterCreator.scss'

class CardHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCardView: 0,
            cardViewOrder: ['deck', 'hand', 'discard', 'burn'],
        }
    }
    
    render(){
        const {
            deck,
            hand,
            discard,
            burn,
            resetDeck
        } = this.props
        
        const {
            selectedCardView,
            cardViewOrder
        } = this.state
        
        return (
            <main>
                <div className='card-options-menu'>
                    {
                        cardViewOrder.map((item, index) => 
                            <div 
                                className={`card-option ${selectedCardView === index ? 'selected' : ''}`}
                                onClick={() => this.setState({selectedCardView: index})}
                                key={item}
                            >
                                <span>{`${item} (${this.props[item].length})`}</span>
                            </div>             
                        )
                    }
                </div>
                <div className='card-display'>
                    {
                        this.props[cardViewOrder[selectedCardView]].map(card =>
                            card && <Card cardInfo={card} cardView={cardViewOrder[selectedCardView]}/>
                        )
                    }
                </div>
                <div
                    className='reset-deck'
                    onClick={() => resetDeck()}
                >
                    Reset Deck
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        deck: state.deck,
        hand: state.hand,
        discard: state.discard,
        burn: state.burn
    };
};

export default connect(mapStateToProps, {
    resetDeck: resetDeck
})(CardHandler);
