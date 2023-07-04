import styles from './styles.module.css';

const CartButton = () => {
  return (
    <button className={styles.button}>
      <span>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
