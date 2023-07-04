import styles from './styles.module.css';

interface CardProps {
  children: JSX.Element;
}

const Card = ({ children }: CardProps) => {
  return <section className={`${styles.card}`}>{children}</section>;
};

export default Card;
