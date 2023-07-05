import store from '../store/store';

export interface uiState {
  cartIsVisible: boolean;
  notification: { status: string; title: string; message: string } | null;
}

export interface CartState {
  items: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
  }[];
  totalQuantity: number;
}

export interface RootState {
  ui: uiState;
  cart: CartState;
}

export type AppDispatch = typeof store.dispatch;
