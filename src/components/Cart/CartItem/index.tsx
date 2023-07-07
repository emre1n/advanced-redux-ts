import { useAppDispatch } from '../../../hooks/useTypedSelector';

import { cartActions } from '../../../store/slices/cart.store';
import { uiActions } from '../../../store/slices/ui.store';
import styles from './styles.module.css';
interface CartItemProps {
  item: {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const { title, quantity, total, price, id } = item;

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
    dispatch(uiActions.setCartUpdated(true));
  };
  const handleAddItem = async () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
    dispatch(uiActions.setCartUpdated(true));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{' '}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
