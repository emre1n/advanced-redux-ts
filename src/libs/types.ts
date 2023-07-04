export interface uiState {
  cartIsVisible: boolean;
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
