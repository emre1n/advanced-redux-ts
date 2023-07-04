import styles from './styles.module.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={`${styles.card} ${className ? className : ''}`}>
      {children}
    </section>
  );
};

export default Card;
