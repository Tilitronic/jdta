import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currencyReducer from '../components/CurrencySelectorAndCart/currencySlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currency: currencyReducer,
  },
});
