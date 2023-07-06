import { createAsyncThunk } from '@reduxjs/toolkit';

import { CartDBState, CartState } from '../../../libs/types';

export const fetchCartData = createAsyncThunk('cart/fetch', async () => {
  const response = await fetch('http://localhost:5000/cart/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log('thunk', data);
  return data;
});

export const sendCartData = createAsyncThunk(
  'cart/send',
  async (cart: CartDBState, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:5000/cart/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(
        'Sending cart data failed!(SendCartData)'
      );
    }
  }
);
