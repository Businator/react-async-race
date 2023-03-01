import { deleteCar } from '../../../../api';
import styles from './ChangeCarButtons.module.css';

export const ChangeCarButtons = ({ name, id }) => {
  return (
    <div className={styles.container}>
      <button onClick={async () => await deleteCar(id)}>Delete</button>
      <button onClick={() => console.log(id)}>Select</button>
      <p>{name}</p>
    </div>
  );
};
