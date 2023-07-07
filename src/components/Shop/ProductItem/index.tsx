// import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../hooks/useTypedSelector';

import { cartActions } from '../../../store/slices/cart.store';
import { uiActions } from '../../../store/slices/ui.store';
import Card from '../../UI/Card';
import styles from './styles.module.css';

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem = ({ title, price, description, id }: ProductItemProps) => {
  const dispatch = useAppDispatch();
  // const cart = useAppSelector(state => state.cart);
  // const cartUpdated = useAppSelector(state => state.ui.isCartUpdated);

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
    dispatch(uiActions.setCartUpdated(true));
    // dispatch(sendCartData(cart));
  };

  return (
    <li className={styles.item}>
      <Card>
        <>
          <header>
            <h3>{title}</h3>
            <div className={styles.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={styles.actions}>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </>
      </Card>
    </li>
  );
};

export default ProductItem;
