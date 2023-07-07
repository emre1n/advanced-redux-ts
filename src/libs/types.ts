import store from '../store/store';

export interface uiState {
  cartIsVisible: boolean;
  notification: { status: string; title: string; message: string } | null;
  isCartUpdated: boolean;
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
  loading: boolean;
  error: boolean;
}
export interface RootState {
  ui: uiState;
  cart: CartState;
}

export type AppDispatch = typeof store.dispatch;
