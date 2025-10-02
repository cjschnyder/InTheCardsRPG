import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { newScene, rest, saveCharacter, addCustomCard } from '../store/characterReducer';
import { Card } from './Card';
import '../style/InTheCards.scss';
import './CardHandler.scss';

export const CardHandler = () => {
    const useAction = useDispatch();

    const views = useSelector(state => ({
        hand: state.character.hand,
        discard: state.character.discard
    }));
    const discardRest = useSelector(state => state.character.discardRest);
    const totalDiscard = [...views.discard, ...discardRest];

    const [selectedCardView, setSelectedCardView] = useState('hand');
    const [showCustomCardForm, setShowCustomCardForm] = useState(false);
    const [newCard, setNewCard] = useState({ 
        abilities: [
            { name: '', type: '', description: '' },
            { name: '', type: '', description: '' }
        ]
    });

    const updateAbility = (index, field, value) => {
        const updatedAbilities = [...newCard.abilities];
        updatedAbilities[index] = { ...updatedAbilities[index], [field]: value };
        setNewCard({ ...newCard, abilities: updatedAbilities });
    };

    return (
        <main>
            <div className='card-options-menu'>
                <div 
                    className={`card-option ${selectedCardView === 'hand' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('hand')}
                >
                    <span>{`Hand (${views.hand.length})`}</span>
                </div>
                <div 
                    className={`card-option ${selectedCardView === 'discard' ? 'selected' : ''}`}
                    onClick={() => setSelectedCardView('discard')}
                >
                    <span>{`Discard (${views.discard.length + discardRest.length})`}</span>
                </div>
            </div>
            <div className='card-display'>
                {
                    selectedCardView === 'hand' ?
                        views.hand.map(card =>
                            <Card cardId={card} cardView={selectedCardView}/>
                        )
                    :
                        totalDiscard.map(card =>
                            <Card cardId={card} cardView={selectedCardView}/>
                        )
                }
            </div>
            <div className="card-functions">
                <div className="card-function">
                    <div
                        className='new-scene'
                        onClick={() => (
                            useAction(newScene()),
                            useAction(saveCharacter())
                        )}
                    >
                        New Scene
                    </div>
                </div>
                <div className="card-function">
                    <div
                        className='reset-hand'
                        onClick={() => (
                            useAction(rest()),
                            useAction(saveCharacter())
                        )}
                    >
                        Rest
                    </div>
                </div>
                <div className="card-function">
                    <div
                        className='add-custom-card'
                        onClick={() => setShowCustomCardForm(!showCustomCardForm)}
                    >
                        {showCustomCardForm ? 'Cancel' : 'Add Custom Card'}
                    </div>
                </div>
            </div>
            {showCustomCardForm && (
                <div className="custom-card-form">
                    {newCard.abilities.map((ability, index) => (
                        <div key={index} className="ability-form">
                            <h3>{index === 0 ? "Primary Ability" : "Secondary Ability (Optional)"}</h3>
                            <input
                                type="text"
                                placeholder="Ability Name"
                                value={ability.name}
                                onChange={(e) => updateAbility(index, 'name', e.target.value)}
                            />
                            <select
                                value={ability.type}
                                onChange={(e) => updateAbility(index, 'type', e.target.value)}
                            >
                                <option value=""> -- Select Type --</option>
                                <option value="Active">Active</option>
                                <option value="Active - Rest">Active - Rest</option>
                                <option value="Active - Spell">Active - Spell</option>
                                <option value="Active - Spell - Rest">Active - Spell - Rest</option>
                                <option value="Passive">Passive</option>
                                <option value="Passive - Spell">Passive - Spell</option>
                                <option value="Triggered">Triggered</option>
                                <option value="Triggered - Rest">Triggered - Rest</option>
                                <option value="Triggered - Spell">Triggered - Spell</option>
                                <option value="Triggered - Spell - Rest">Triggered - Spell - Rest</option>
                                <option value="Special">Special</option>
                            </select>
                            <textarea
                                placeholder="Ability Description"
                                value={ability.description}
                                onChange={(e) => updateAbility(index, 'description', e.target.value)}
                            />
                        </div>
                    ))}
                    <div
                        className="create-card-button"
                        onClick={() => {
                            // First ability is required
                            const firstAbility = newCard.abilities[0];
                            const isFirstAbilityValid = firstAbility.name && firstAbility.type && firstAbility.description;
                            
                            // Second ability is optional, but if any field is filled, all are required
                            const secondAbility = newCard.abilities[1];
                            const hasAnySecondAbilityField = secondAbility.name || secondAbility.type || secondAbility.description;
                            const isSecondAbilityValid = !hasAnySecondAbilityField || 
                                (secondAbility.name && secondAbility.type && secondAbility.description);
                            
                            if (isFirstAbilityValid && isSecondAbilityValid) {
                                useAction(addCustomCard({
                                    abilities: newCard.abilities.filter(ability => 
                                        ability.name && ability.type && ability.description
                                    )
                                }));
                                useAction(saveCharacter());
                                setNewCard({ 
                                    abilities: [
                                        { name: '', type: '', description: '' },
                                        { name: '', type: '', description: '' }
                                    ]
                                });
                                setShowCustomCardForm(false);
                            }
                        }}
                    >
                        Create Card
                    </div>
                </div>
            )}
        </main>
    )
}