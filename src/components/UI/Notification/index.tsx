import styles from './styles.module.css';

interface TProps {
  status: string;
  title: string;
  message: string;
}

const Notification = ({ status, title, message }: TProps) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = styles.error;
  }
  if (status === 'success') {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
