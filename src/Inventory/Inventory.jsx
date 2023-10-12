import { Component } from 'react';
import { connect } from 'react-redux';
import {removeItem} from '../store/actions'
import AddItemModal from './AddItemModal';
import '../style/Inventory.scss';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddItemModal: false,
            armor: {}
        }
    }
    
    render(){
        const {
            inventory,
            armor,
            removeItem
        } = this.props
        const {
            showAddItemModal
        } = this.state
        
        const toggleInventoryModal = () => {
            this.setState({
                showAddItemModal: !showAddItemModal,
            });
        }
        
        return (
            <main>
                <div className='inventory'>
                    <div className='display-armor'>
                        <h2>Armor</h2>
                        <div className='item-display'>
                            {inventory.map(item =>
                                (item.type === 'armor' &&
                                    <div className='item'>
                                        <div className='name'>{item.name}</div>
                                        <div className='buttons quantity'>
                                            <div className='button add'>+</div>
                                            <span className='quantity-text'>Quantity: {item.quantity}</span>
                                            <div className='button subtract'>-</div>
                                        </div>
                                        <div className='buttons'>
                                            <div className='button equip'>Equip</div>
                                            <div className='button remove' onClick={() => removeItem(item)}>Remove</div>
                                            <div className='button extend'>
                                                <span className={`arrow`}>&#8249;</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className='display-weapons'>
                        <h2>Weapons</h2>
                        <div className='item-display'>
                            {inventory.map(item =>
                                (item.type === 'weapon' &&
                                    <div className='item'>
                                        <div className='name'>{item.name}</div>
                                        <div className='buttons quantity'>
                                            <div className='button add'>+</div>
                                            <span className='quantity-text'>Quantity: {item.quantity}</span>
                                            <div className='button subtract'>-</div>
                                        </div>
                                        <div className='buttons'>
                                            <div className='button equip'>Equip</div>
                                            <div className='button remove' onClick={() => removeItem(item)}>Remove</div>
                                            <div className='button extend'>
                                                <span className={`arrow`}>&#8249;</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className='display-gear'>
                        <h2>Equipment</h2>
                        <div className='item-display'>
                            {inventory.map(item =>
                                (item.type === 'item' &&
                                    <div className='item'>
                                        <div className='name'>{item.name}</div>
                                        <div className='buttons quantity'>
                                            <div className='button add'>+</div>
                                            <span className='quantity-text'>Quantity: {item.quantity}</span>
                                            <div className='button subtract'>-</div>
                                        </div>
                                        <div className='buttons'>
                                            <div className='button remove' onClick={() => removeItem(item)}>Remove</div>
                                            <div className='button extend'>
                                                <span className={`arrow`}>&#8249;</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className='open-add-item-modal'
                    onClick={() => toggleInventoryModal()}
                >
                    Add Items
                </div>
                <AddItemModal 
                    isOpen={showAddItemModal}
                    close={() => toggleInventoryModal()}    
                />
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
        armor: state.armor
    };
};

export default connect(mapStateToProps, {
    removeItem: removeItem
})(Inventory);