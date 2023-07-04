import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from '../../../libs/types';

const initialState: CartState = { items: [], totalQuantity: 0 };

createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<{ id: string; name: string; price: number }>
    ) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => {
        item.id === newItem.id;
      });
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: () => {
      console.log('item removed!');
    },
  },
});
