import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from '../components/CurrencySelectorAndCart/currencySlice.js';
import categoryReducer from '../features/ShowcasePage/categorySlice.js'
import cartReducer from '../features/CartPage/cartSlice.js'
export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});
