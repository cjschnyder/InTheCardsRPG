import { Component } from 'react';
import { connect } from 'react-redux';
import '../style/CharacterModal.scss';
import '../style/Inventory.scss';
import itemsList from '../assets/items.json';
import Select from 'react-select';

class AddItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            customItems: []
        }
    }
    
    render(){
        const {
            isOpen,
            close
        } = this.props
        const {
            items,
            customItems
        } = this.state
        
        return (
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-title'>
                    <h2>Add Items</h2>
                    <div className='close-button' onClick={() => close()}>
                        <span>X</span>
                    </div>
                </div>
                <div className='inventory-list'>
                      <Select
                        isMulti
                        name="colors"
                        options={itemsList.items.map(item => ({value: item.name, label: `${item.type}: ${item.name}`}))}
                        className="items-multi-select"
                      />
                </div>
            </div>
        )
    }
}
    
export default AddItemModal;