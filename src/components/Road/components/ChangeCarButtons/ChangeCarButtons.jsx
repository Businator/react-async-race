import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = () => {
  return (
    <div className={styles.container}>
      <button>Delete</button>
      <button>Select</button>
      <p>Name of Car</p>
    </div>
  );
};
