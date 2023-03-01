import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ name, id }) => {
  return (
    <div className={styles.container}>
      <button>Delete</button>
      <button>Select</button>
      <p>{name}</p>
    </div>
  );
};
