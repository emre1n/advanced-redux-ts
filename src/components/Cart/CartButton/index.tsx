import { useDispatch } from 'react-redux';

import { uiActions } from '../../../store/slices/ui.store';
import styles from './styles.module.css';

const CartButton = () => {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={styles.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
