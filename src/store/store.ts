import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui.store';
import cartSlice from './slices/cart.store';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
