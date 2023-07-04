import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/ui.store';

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
