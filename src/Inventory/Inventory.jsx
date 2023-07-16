import { Component } from 'react';
import { connect } from 'react-redux';
import '../style/Inventory.scss';
import AddItemModal from './AddItemModal';

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
            showAddItemModal,
            armor
        } = this.state
        
        const toggleInventoryModal = () => {
            this.setState({
                showAddItemModal: !showAddItemModal,
            });
        }
        
        return (
            <main>
                <div className='inventory'>
                    <div className='display-armor'></div>
                    <div className='display-weapons'></div>
                    <div className='display-gear'></div>
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

export default Inventory;