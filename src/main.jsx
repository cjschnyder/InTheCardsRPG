import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import DernCharacterCreator from './DernCharacterCreator';
import './style/main.scss';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <DernCharacterCreator />
        </Provider>
    </React.StrictMode>,
);
