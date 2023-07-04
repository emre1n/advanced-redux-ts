import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/slices/cart.store';
import Card from '../../UI/Card';
import styles from './styles.module.css';

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem = ({ title, price, description, id }: ProductItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
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
