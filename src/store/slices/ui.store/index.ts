import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { uiState } from '../../../libs/types';

const initialState: uiState = {
  cartIsVisible: false,
  notification: null,
  isCartUpdated: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: state => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (
      state,
      action: PayloadAction<{ status: string; title: string; message: string }>
    ) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setCartUpdated: (state, action: PayloadAction<boolean>) => {
      state.isCartUpdated = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
