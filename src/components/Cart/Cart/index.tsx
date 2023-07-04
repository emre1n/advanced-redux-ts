import { useSelector } from 'react-redux/es/hooks/useSelector';

import Card from '../../UI/Card';
import styles from './styles.module.css';
import CartItem from '../CartItem';

import { RootState } from '../../../libs/types';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
