import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from '../../../libs/types';

import { fetchCartData, sendCartData } from './actions';

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      // state.error = action.payload.error;
      // state.loading = action.payload.error;
    },

    addItemToCart: (
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++; // Increase the total quantity in the cart

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--; // Decrease the total quantity in the cart
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
  extraReducers: builder => {
    // FETCHING DATA FROM BACKEND SERVER

    builder.addCase(fetchCartData.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(
      fetchCartData.fulfilled,
      (state, action: PayloadAction<CartState>) => {
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
        state.loading = false;
        state.error = false;
      }
    );
    builder.addCase(fetchCartData.rejected, state => {
      state.loading = false;
      state.error = true;
      // throw new Error('Fetching cart data failed!(extraReducer)');
    });

    // UPDATING DATA ON THE BACKEND SERVER

    builder.addCase(sendCartData.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(sendCartData.fulfilled, state => {
      // state.items = action.payload.items;
      // state.totalQuantity = action.payload.totalQuantity;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(sendCartData.rejected, state => {
      state.loading = false;
      state.error = true;
      // throw new Error('Sending cart data failed!(extraReducer)');
    });
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

// dispatch(
//   uiActions.showNotification({
//     status: 'pending',
//     title: 'Sending...',
//     message: 'Sending cart data!',
//   })
// );

// const sendRequest = async () => {
//   const response = await fetch('http://localhost:5000/cart/', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(cart),
//   });

//   if (!response.ok) {
//     throw new Error('Sending cart data failed.');
//   }
// };

// try {
//   await sendRequest();
//   dispatch(
//     uiActions.showNotification({
//       status: 'success',
//       title: 'Success!',
//       message: 'Sent cart data successfully!',
//     })
//   );
// } catch (error: any) {
//   dispatch(
//     uiActions.showNotification({
//       status: 'error',
//       title: error.message,
//       message: 'Sending cart data failed!',
//     })
//   );
// }
