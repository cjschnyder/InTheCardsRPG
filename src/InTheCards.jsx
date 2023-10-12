import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CardHandler from './cardHandler/CardHandler';
import CharacterSheet from './characterSheet/CharacterSheet';
import Inventory from './inventory/Inventory';
import './style/InTheCards.scss'

export const InTheCards = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div id="in-the-cards">
            <BrowserRouter>
                <header>
                    <div id="menu-icon" onClick={() => {setIsMenuOpen(!isMenuOpen)}}>
                        <svg width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#051326" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
                    </div>
                    <div id="in-the-cards-banner">
                        <img src="src/assets/InTheCardsLabelSmall.png" />
                    </div>
                </header>
                <div id='itc-menu-container' className={isMenuOpen ? '' : 'hide'}>
                    <ul className='itc-menu'>
                        <a href='/create'>
                            <li className='itc-menu-item'>Create A Character</li>
                        </a>
                        <a href='/characters'>
                            <li className='itc-menu-item'>Your Characters</li>
                        </a>
                        <a href='/quick-start'>
                            <li className='itc-menu-item'>Quick Start</li>
                        </a>
                        <a href='/rules'>
                            <li className='itc-menu-item'>Rules</li>
                        </a>
                        <ul className='itc-rules-submenu'>
                            <a href='/rules#basics'>
                                <li className='itc-submenu-item'>The Basics</li>
                            </a>
                            <a href='/rules#actions'>
                                <li className='itc-submenu-item'>Actions</li>
                            </a>
                            <a href='/rules#character'>
                                <li className='itc-submenu-item'>How to Make a Character</li>
                            </a>
                            <a href='/rules#ancestries'>
                                <li className='itc-submenu-item'>Ancestries</li>
                            </a>
                            <a href='/rules#backgrounds'>
                                <li className='itc-submenu-item'>Backgrounds</li>
                            </a>
                            <a href='/rules#starter-classes'>
                                <li className='itc-submenu-item'>Starter Classes</li>
                            </a>
                            <a href='/rules#specialty-classes'>
                                <li className='itc-submenu-item'>Specialty Classes</li>
                            </a>
                            <a href='/rules#skills'>
                                <li className='itc-submenu-item'>Skills</li>
                            </a>
                            <a href='/rules#skill'>
                                <li className='itc-submenu-item'>Equipment</li>
                            </a>
                        </ul>
                    </ul>
                </div>
                <div className={isMenuOpen ? 'cover' : ''} />
                <div className={`itc-container ${isMenuOpen ? 'blur' : ''}`}>
                    <Routes>
                        <Route path='/' element={<CharacterSheet />} />
                        <Route path='/create' element={<CharacterSheet />} />
                        <Route path='/characters' element={<CharacterSheet />} />
                        <Route path='/character-sheet' element={<CharacterSheet />} />
                        <Route path='/cardhandler' element={<CardHandler />} />
                        <Route path='/inventory' element={<Inventory />} />
                        <Route path='/quick-start' element={<Inventory />} />
                        <Route path='/rules' element={<Inventory />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
