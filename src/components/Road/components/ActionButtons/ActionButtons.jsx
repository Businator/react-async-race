import styles from './ActionButtons.module.css';

export const ActionButtons = () => {
  return (
    <div className={styles.container}>
      <button>Start</button>
      <button>Stop</button>
    </div>
  );
};
