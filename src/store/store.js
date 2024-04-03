import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import characterReducer from './characterReducer.js';

const persistConfig = {
  key: 'root',
  storage,
}

const combinedReducer = combineReducers({character: characterReducer})

const persistedReducer = persistReducer(persistConfig, combinedReducer);
const store = configureStore({
  reducer:  persistedReducer
});
const persistor = persistStore(store);

export { store, persistor }