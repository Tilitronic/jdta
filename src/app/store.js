import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../components/CurrencySelectorAndCart/currencySlice.js';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
