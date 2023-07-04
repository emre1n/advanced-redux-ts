import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../../store/slices/ui.store';
import styles from './styles.module.css';
import { RootState } from '../../../libs/types';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleToggleCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={styles.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
