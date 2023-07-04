export interface UIState {
  cartIsVisible: boolean;
}

export interface CartState {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
  }[];
  totalQuantity: number;
}

export interface RootState {
  ui: UIState;
}
