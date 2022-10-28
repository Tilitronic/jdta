import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import currencyReducer from '../components/CurrencySelectorAndCart/currencySlice.js';
import categoryReducer from '../features/ShowcasePage/categorySlice.js'
import cartReducer from '../features/CartPage/cartSlice.js'


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  currency: currencyReducer,
  category: categoryReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)