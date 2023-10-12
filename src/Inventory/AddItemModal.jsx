import { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import {setInventory} from '../store/actions'
import '../style/CharacterModal.scss';
import '../style/Inventory.scss';
import itemsList from '../assets/items.json';

class AddItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            customItems: [],
            customItemName: '',
            customItemType: '',
            customItemWeight: '',
            customItemCost: '',
            armorDefense: 0,
            armorResist: 0,
            armorType: '',
            itemDescription: '',
            weaponSkill: '',
            weaponDamage: '',
            weaponProperties: ''
        }
    }
    
    render(){
        const {
            isOpen,
            close,
            setInventory
        } = this.props
        const {
            items,
            customItems,
            customItemName,
            customItemType,
            customItemWeight,
            customItemCost,
            itemDescription,
        } = this.state
        
        const addCustomItem = () => {
            if (customItemName && customItemType === 'item') {
                this.setState({
                    customItems: [
                        ...customItems,
                        {
                            name: customItemName,
                            type: customItemType,
                            description: itemDescription,
                            weight: customItemWeight,
                            cost: customItemCost
                        }
                    ],
                    customItemName: '',
                    customItemType: '',
                    customItemWeight: '',
                    customItemCost: '',
                    itemDescription: ''
                });
            }
        }
        
        const saveInventory = () => {
            setInventory([...items, ...customItems]);
            this.state = {
                items: [],
                customItems: [],
                customItemName: '',
                customItemType: '',
                customItemWeight: '',
                customItemCost: '',
                itemDescription: ''                                
            };
            close();
        }
        return (
            <div className={`modal-wrapper ${isOpen ? 'show' : ''}`}>
                <div className='modal-title'>
                    <h2>Add Items</h2>
                    <div className='close-button' onClick={() => close()}>
                        <span>X</span>
                    </div>
                </div>
                <div className='modal-body'>
                    <div className='inventory-list'>
                           <h3>Select Existing Items</h3>
                          <Select
                            isMulti
                            closeMenuOnSelect={false}
                            name="item-list"
                            options={itemsList.items.map(item => ({value: item.name, label: `${item.type}: ${item.name}`}))}
                            onChange={selectedOptions => this.setState({items: selectedOptions})}
                            className="items-multi-select"
                          />
                    </div>
                    <h3>Add Custom Items</h3>
                    <div className='modal-option'>
                        <span>Item Name: </span>
                        <div className='modal-input'>
                            <input
                                value={customItemName}
                                onChange={(e) => {this.setState({customItemName: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className={`modal-option ${customItemName ? '' : 'hide'}`}>
                        <span>Item Description: </span>
                        <div className='modal-input'>
                            <input
                                value={itemDescription}
                                onChange={(e) => {this.setState({itemDescription: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className={`modal-option ${customItemName ? '' : 'hide'}`}>
                        <span>Item Weight: </span>
                        <div className='modal-input'>
                            <select 
                                value={customItemWeight}
                                onChange={e => this.setState({customItemWeight: event.target.value})}
                            >
                                <option selected>-- Select a Weight --</option>
                                <option value='light'>Light</option>
                                <option value='medium'>Medium</option>
                                <option value='heavy'>Heavy</option>
                            </select>
                        </div>
                    </div>
                    <div className={`modal-option ${customItemName ? '' : 'hide'}`}>
                        <span>Item Cost: </span>
                        <div className='modal-input'>
                            <input
                                value={customItemCost}
                                onChange={(e) => {this.setState({customItemCost: e.target.value})}}
                            />
                        </div>
                    </div>
                    <div className={`added-custom-items ${customItems.length > 0 ? '' : 'hide'}`}>
                        <h2>Current Custom Items</h2>
                        {customItems.map(item =>
                            <span>{item.name}</span>
                        )}
                    </div>
                    <div className='horizontal-buttons'>
                        <div className='button' onClick={() => addCustomItem()}>
                            Add Custom Item
                        </div>
                    </div>
                    <div className='horizontal-buttons'>
                        <div className='button' onClick={() => saveInventory()}>
                            Save
                        </div>
                        <div className='button' onClick={() => close()}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    
export default connect(null,{
    setInventory: setInventory
})(AddItemModal);