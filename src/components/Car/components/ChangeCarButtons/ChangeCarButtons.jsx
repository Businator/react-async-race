import { deleteCar } from '../../../../api';
import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ name, id, setSelectedCar }) => {
  return (
    <div className={styles.container}>
      <button
        onClick={async () => {
          await deleteCar(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setSelectedCar(id);
        }}
      >
        Select
      </button>
      <p>{name}</p>
    </div>
  );
};
