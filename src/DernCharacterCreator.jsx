import { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import {resetDeck} from './store/actions'
import NewCharacterModal from './NewCharacterModal';
import LoadCharacterModal from './LoadCharacterModal';
import EditCharacterModal from './EditCharacterModal';
import './style/DernCharacterCreator.scss'

class DernCharacterCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewCharacter: false,
            showLoadCharacter: false,
            showEditCharacter: false,
            selectedCardView: 0,
            cardViewOrder: ['deck', 'hand', 'discard', 'burn']
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
            showNewCharacter,
            showLoadCharacter,
            showEditCharacter,
            selectedCardView,
            cardViewOrder
        } = this.state
        
        const toggleNewCharacterModal = () => {
            showLoadCharacter && this.setState({showLoadCharacter: false});
            showEditCharacter && this.setState({showEditCharacter: false});
            this.setState({showNewCharacter: !showNewCharacter});
        }
        
        const toggleLoadCharacterModal = () => {
            showNewCharacter && this.setState({showNewCharacter: false});
            showEditCharacter && this.setState({showEditCharacter: false});
            this.setState({showLoadCharacter: !showLoadCharacter});
        }
        
        const toggleEditCharacterModal = () => {
            showNewCharacter && this.setState({showNewCharacter: false});
            showLoadCharacter && this.setState({showLoadCharacter: false});
            this.setState({showEditCharacter: !showEditCharacter});
        }
        
        return (
            <div id="dernCharacterCreator">
               <header>
                    <h1 className="title">Let Me Handle Your Deck</h1>
                    <div className="character-menu">
                        <div className="option" onClick={() => toggleNewCharacterModal()}>
                            <span>Create New Character</span>
                        </div>
                        <div className="option" onClick={() => toggleLoadCharacterModal()}>
                            <span>Load Character</span>
                        </div>
                    </div>
                </header>
                <main>
                    <div className='card-options-menu'>
                        {
                            cardViewOrder.map((item, index) => 
                                <div 
                                    className={`card-option ${selectedCardView === index && 'selected'}`}
                                    onClick={() => this.setState({selectedCardView: index})}
                                    key={item}
                                >
                                    <span>{item}</span>
                                </div>             
                            )
                        }
                    </div>
                    <div className='card-display'>
                        {
                            cardViewOrder[selectedCardView] === 'deck' ?
                                deck.map(card => 
                                    <Card cardInfo={card} cardView={cardViewOrder[selectedCardView]}/>
                                )
                            :
                                cardViewOrder[selectedCardView] === 'hand' ?
                                    hand.map(card => 
                                        <Card cardInfo={card} cardView={cardViewOrder[selectedCardView]}/>
                                    )
                                :
                                    cardViewOrder[selectedCardView] === 'discard' ?
                                        discard.map(card => 
                                            <Card cardInfo={card} cardView={cardViewOrder[selectedCardView]}/>
                                        )
                                    :
                                        burn.map(card => 
                                            <Card cardInfo={card} cardView={cardViewOrder[selectedCardView]}/>
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
                <div>
                    <NewCharacterModal
                        isOpen={showNewCharacter}
                        close={() => toggleNewCharacterModal()}
                    />
                    <LoadCharacterModal 
                        isOpen={showLoadCharacter}
                        close={() => toggleLoadCharacterModal()}
                    />
                    <EditCharacterModal 
                        isOpen={showEditCharacter}
                        close={() => toggleEditCharacterModal()}
                    />
                </div>
            </div>
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
})(DernCharacterCreator);
