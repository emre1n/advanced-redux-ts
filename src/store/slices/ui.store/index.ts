import { createSlice } from '@reduxjs/toolkit';
import { uiState } from '../../../libs/types';

const initialState: uiState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: state => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
