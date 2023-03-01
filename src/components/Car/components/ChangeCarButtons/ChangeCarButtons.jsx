import { deleteCar, getCars } from '../../../../api';
import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ name, id, getCar }) => {
  const getCarsData = async () => {
    const { items } = await getCars(1);
    getCar(items);
  };
  return (
    <div className={styles.container}>
      <button
        onClick={async () => {
          await deleteCar(id);
          await getCarsData();
        }}
      >
        Delete
      </button>
      <button onClick={() => console.log(id)}>Select</button>
      <p>{name}</p>
    </div>
  );
};
