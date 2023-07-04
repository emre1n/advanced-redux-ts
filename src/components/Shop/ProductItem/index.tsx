import Card from '../../UI/Card';
import styles from './styles.module.css';

interface ProductItemProps {
  title: string;
  price: number;
  description: string;
}

const ProductItem = ({ title, price, description }: ProductItemProps) => {
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
            <button>Add to Cart</button>
          </div>
        </>
      </Card>
    </li>
  );
};

export default ProductItem;
